const express = require("express");
const router = express.Router();
const { Scenario } = require("../models/models");

router.get("/", (req, res) => {
  let criteria = {};

  Scenario.find(criteria, (err, scenarii) => {
    if (err) {
      return res.status(500).send("Internal server error");
    }
    if (!scenarii) {
      return res.status(404).send("Scenarii not found");
    }
    return res.json(scenarii);
  });
});

router.get("/:id", (req, res) => {
  const id = req.params.id;

  Scenario.findById(id, (err, scenario) => {
    if (err) {
      return res.status(500).send("Internal server error");
    }
    if (!scenario) {
      return res.status(404).send("Scenario not found");
    }
    return res.json(scenario);
  });
});

/* --------------------------------------------------------------------- Private Routes */
router.post("/", (req, res) => {
  const data = req.body;
  const newScenario = new Scenario(data);
  console.log(newScenario);
  newScenario.save(err => {
    if (err) {
      console.error("Failure! " + err);
      return res.status(400).send("Invalid Scenario creation request");
    }
    return res.status(201).send(data);
  });
});

router.put("/:id", (req, res) => {
  const id = req.params.id;
  const data = req.body;
  Scenario.findByIdAndUpdate(id, data, { new: true }, err => {
    if (err) {
      console.error("Failure! " + err);
      return res.status(400).send("Invalid Scenario update request");
    }
    return res.status(200).send(data);
  });
});

router.delete("/:id", (req, res) => {
  const id = req.params.id;
  Scenario.findByIdAndRemove(id, err => {
    if (err) {
      console.error("Failure! " + err);
      return res.status(400).send("Invalid Scenario deletion request");
    }
    return res.sendStatus(204);
  });
});

module.exports = router;
