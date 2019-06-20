const mongoose = require("mongoose");
require("dotenv").config();
let CONFIG = {};

CONFIG.portNumber = process.env.PORT || "5050";
CONFIG.dbDialect = process.env.DB_DIALECT || "mysql";
CONFIG.dbHost = process.env.DB_HOST || "localhost";
CONFIG.dbPort = process.env.DB_PORT || "3306";
CONFIG.dbName = process.env.DB_NAME || "name";
CONFIG.jwtSecret = process.env.JWT_SECRET || "jwt_please_change";
CONFIG.saltRounds = process.env.SALT_ROUNDS || "20";
CONFIG.jwtExpiration = process.env.JWT_EXPIRATION || "10000";

const dbUrl = `mongodb://${CONFIG.dbHost}:${CONFIG.dbPortNumber}/${
  CONFIG.dbName
}`;
mongoose.connect(dbUrl, { useNewUrlParser: true });
CONFIG.db = mongoose.connection;

module.exports = CONFIG;
