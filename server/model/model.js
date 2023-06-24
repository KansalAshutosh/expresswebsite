//File Name: model.js
//Student's Name: Ashutosh Kansal
//StudentID: 301233980
//Date: 22 June, 2023

//Defining userschema for the userdb collection

const mongoose = require("mongoose");
var schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  number: {
    type: Number,
  },
});

const Userdb = mongoose.model("userdb", schema);
module.exports = Userdb;
