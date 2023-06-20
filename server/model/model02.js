const mongoose = require("mongoose");

var userSchema = new mongoose.Schema({
  name: String,
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: String,
});

//exports.User = mongoose.model("User", userSchema);

var User = mongoose.model("User", userSchema);

module.exports = User;
