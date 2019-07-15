const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  pseudo: {
    type: String,
    required: true,
    unique: true
  },
  avatar: {
    type: String,
    required: false
  },
  password: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  wants_email_notifications: {
    type: Boolean,
    default: false
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
const User = mongoose.model("user", UserSchema);

module.exports = {
  User
};
