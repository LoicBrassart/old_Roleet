const express = require("express");
const router = express.Router();
const passport = require("passport");
const jwt = require("jsonwebtoken");
require("../passport-strategies");
const { jwtSecret, saltRounds } = require("../conf");
const bcrypt = require("bcrypt");
const { User } = require("../models/User");

router.post("/signup", (req, res) => {
  const formData = req.body;
  bcrypt.hash(req.body.password, parseInt(saltRounds), (err, hash) => {
    formData.password = hash;
    const newUser = new User(formData);
    newUser.save(err => {
      if (err) {
        console.error("Failure! " + err);
        return res.status(400).send("Invalid User creation request");
      }
      return res.status(201).send(newUser);
    });
  });
});

router.post(
  "/login",
  passport.authenticate("local", { session: false }),
  (req, res, next) => {
    console.log("Post-auth");
    next();
  },

  (err, user, info) => {
    if (err || !user) {
      // User not logged in (inexistant or tech error)
      return res.status(401).json({
        message: "Failed auth!",
        user,
        err,
        info
      });
    }
    req.login(user, { session: false }, loginErr => {
      if (loginErr) {
        // Failed (technically) to log the user in
        return res.status(401).json({
          message: "Couldn't log you in!",
          user,
          loginErr
        });
      }
      const token = jwt.sign(user, jwtSecret);
      return res.status(200).json({ user, token });
    });
  }
);

module.exports = router;
