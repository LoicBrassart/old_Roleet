const mongoose = require("mongoose");

const portNumber = 11111;
const dbPortNumber = 11112;

const dbUrl = `mongodb://localhost:${dbPortNumber}/roleet`;
mongoose.connect(dbUrl, { useNewUrlParser: true });
let db = mongoose.connection;

module.exports = {
  portNumber,
  db
};
