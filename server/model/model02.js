//File Name: model02.js
//Student's Name: Ashutosh Kansal
//StudentID: 301233980
//Date: 22 June, 2023

//Defining userschema for the user collection

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
