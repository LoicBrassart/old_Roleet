const mongoose = require("mongoose");
require("dotenv").config();
let CONFIG = {}; //Make this global to use all over the application

CONFIG.portNumber = process.env.PORT || "5050";
CONFIG.dbDialect = process.env.DB_DIALECT || "mysql";
CONFIG.dbHost = process.env.DB_HOST || "localhost";
CONFIG.dbPort = process.env.DB_PORT || "3306";
CONFIG.dbName = process.env.DB_NAME || "name";
CONFIG.jwtEncryption = process.env.JWT_ENCRYPTION || "jwt_please_change";
CONFIG.jwtExpiration = process.env.JWT_EXPIRATION || "10000";

const dbUrl = `mongodb://${CONFIG.dbHost}:${CONFIG.dbPortNumber}/${
  CONFIG.dbName
}`;
mongoose.connect(dbUrl, { useNewUrlParser: true });
// let db = mongoose.connection;

module.exports = CONFIG;
