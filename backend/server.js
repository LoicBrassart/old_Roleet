const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

const { portNumber } = require("./conf");

/* --------------------------------------------------------------------- Tools */
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

/* --------------------------------------------------------------------- Public Routes */
app.get("/", (req, res) => {
  const msg = "Welcome on Roleet!";
  console.log(msg);
  res.status(200).send(msg);
});

app.use("/character", require("./routes/character"));
app.use("/scenario", require("./routes/scenario"));
app.use("/user", require("./routes/user"));

/* --------------------------------------------------------------------- Private Routes */

/* --------------------------------------------------------------------- 404 and server launch */
app.use((req, res, next) => {
  const msg = `Page not found: ${req.url}`;
  console.error(msg);
  res.status(404).send(msg);
});

app.listen(portNumber, () => {
  console.log(`API root available at: http://localhost:${portNumber}/`);
});
