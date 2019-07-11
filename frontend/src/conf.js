const axios = require("axios");
require("dotenv").config();

const api = axios.create({
  baseURL: process.env.REACT_APP_APIHOST || "http://localhost:4040/"
});
module.exports = { api };
