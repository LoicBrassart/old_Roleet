const express = require("express");
const router = express.Router();
const passport = require("passport");
const { Character } = require("../models/models");

router.get("/", (req, res) => {
  let criteria = {};

  // Search by one specific field
  if (req.query.name) {
    criteria.name = req.query.name;
  }

  // Search everywhere
  if (req.query.search) {
    let search = req.query.search;
    criteria = {
      $or: [{ name: { $regex: search } }, { baseline: { $regex: search } }]
    };
  }

  // Pagination
  perPage = 10;
  page = req.query.page || 0;

  Character.find(
    criteria,
    {},
    { skip: page * perPage, limit: perPage },
    (err, characters) => {
      if (err) {
        return res.status(500).send("Internal server error");
      }
      if (!characters) {
        return res.status(404).send("Characters not found");
      }
      return res.json(characters);
    }
  );
});

router.get("/:id", (req, res) => {
  const id = req.params.id;

  Character.findById(id, (err, character) => {
    if (err) {
      return res.status(500).send("Internal server error");
    }
    if (!character) {
      return res.status(404).send("Character not found");
    }
    return res.json(character);
  });
});

router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const data = req.body;
    const newCharacter = new Character(data);
    newCharacter.save(err => {
      if (err) {
        console.error("Failure! " + err);
        return res.status(400).send("Invalid Character creation request");
      }
      return res.status(201).send(data);
    });
  }
);

router.put(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const id = req.params.id;
    const data = req.body;
    Character.findByIdAndUpdate(id, data, { new: true }, err => {
      if (err) {
        console.error("Failure! " + err);
        return res.status(400).send("Invalid Character update request");
      }
      return res.status(200).send(data);
    });
  }
);

router.delete(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const id = req.params.id;
    Character.findByIdAndRemove(id, err => {
      if (err) {
        console.error("Failure! " + err);
        return res.status(400).send("Invalid Character deletion request");
      }
      return res.sendStatus(204);
    });
  }
);

module.exports = router;
