const express = require("express");
const router = express.Router();
const passport = require("passport");
const { User } = require("../models/User");

router.get("/", (req, res) => {
  let criteria = {};

  // Search by one specific field
  if (req.query.name) {
    criteria.pseudo = req.query.name;
  }

  // Search everywhere
  if (req.query.search) {
    let search = req.query.search;
    criteria = {
      $or: [{ pseudo: { $regex: search } }]
    };
  }

  User.find(criteria, (err, users) => {
    if (err) {
      return res.status(500).send("Internal server error");
    }
    if (!users) {
      return res.status(404).send("Users not found");
    }
    return res.json(users);
  });
});

router.get("/:id", (req, res) => {
  const id = req.params.id;

  User.findById(id, (err, user) => {
    if (err) {
      return res.status(500).send("Internal server error");
    }
    if (!user) {
      return res.status(404).send("User not found");
    }
    return res.json(user);
  });
});

/* --------------------------------------------------------------------- Private Routes */
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
