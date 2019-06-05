const { db } = require("../conf");
const { Character, User, Scenario } = require("../models/models");

let data;

data = require("../../documents/users.json");
db.dropCollection("users");
data.map(userData => {
  const newUser = new User(userData);
  newUser.save(err => {
    if (err) {
      console.error(`Failure for User ${userData.pseudo}: ${err}`);
      return;
    }
    console.log(`User recorded: ${userData.pseudo}`);
  });
  return;
});

data = require("../../documents/characters.json");
db.dropCollection("characters");
data.map(charData => {
  const newChar = new Character(charData);
  newChar.save(err => {
    if (err) {
      console.error(`Failure for Character ${charData.name}: ${err}`);
      return;
    }
    console.log(`Character recorded: ${charData.name}`);
  });
  return;
});

data = require("../../documents/scenarii.json");
db.dropCollection("scenarios");
data.map(scenData => {
  const newChar = new Scenario(scenData);
  newChar.save(err => {
    if (err) {
      console.error(`Failure for Scenario ${scenData.title}: ${err}`);
      return;
    }
    console.log(`Scenario recorded: ${scenData.title}`);
  });
  return;
});
