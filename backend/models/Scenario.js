const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;

const ScenarioSchema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true
  },
  author: {
    type: mongoose.ObjectId,
    ref: "User",
    required: false
  },
  summary: {
    type: String,
    required: true,
    unique: true
  },
  readers: {
    type: [
      {
        type: mongoose.ObjectId,
        ref: "User",
        required: true
      }
    ],
    default: []
  },
  created_at: {
    type: Date,
    default: Date.now
  },
  updated_at: {
    type: Date,
    default: Date.now
  }
});
const Scenario = mongoose.model("scenario", ScenarioSchema);

module.exports = {
  Scenario
};
