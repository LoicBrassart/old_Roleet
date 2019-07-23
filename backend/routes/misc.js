const express = require("express");
const router = express.Router();
const { User, Character, Scenario } = require("../models");

router.get("/search", (req, res) => {
  let criteria;
  if (!req.query.needle) {
    return res.status(404).send("No needle, no haystack!");
  }
  const needle = req.query.needle.trim().toLowerCase();

  const fetchUsers = new Promise((resolve, reject) => {
    criteria = {
      $or: [{ pseudo: { $regex: needle, $options: "i" } }]
    };
    User.find(criteria, (err, users) => {
      if (err) {
        reject("Internal server error");
      }
      resolve(users || []);
    });
  });

  const fetchCharacters = new Promise((resolve, reject) => {
    criteria = {
      $or: [
        { name: { $regex: needle, $options: "i" } },
        { tags: { $all: [needle] } }
      ]
    };
    Character.find(criteria, (err, characters) => {
      if (err) {
        reject(`Internal server error: ${err}`);
      }
      resolve(characters || []);
    });
  });

  const fetchScenarii = new Promise((resolve, reject) => {
    criteria = {
      $or: [{ title: { $regex: needle, $options: "i" } }]
    };
    Scenario.find(criteria, (err, scenarii) => {
      if (err) {
        reject(`Internal server error: ${err}`);
      }
      resolve(scenarii || []);
    });
  });

  Promise.all([fetchUsers, fetchCharacters, fetchScenarii])
    .then(([users, characters, scenarii]) => {
      return res.json({ users, characters, scenarii });
    })
    .catch(err => {
      console.log(err);
      return res.status(500).send("Internal server error");
    });
});

module.exports = router;
