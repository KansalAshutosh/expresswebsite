//File Name: connection.js
//Student's Name: Ashutosh Kansal
//StudentID: 301233980
//Date: 22 June, 2023

const mongoose = require("mongoose");

const dotenv = require("dotenv");
dotenv.config({ path: "config.env" });

// Function to establish a connection with MongoDB
const connectDB = async () => {
  try {
    //mongodb connection string
    const con = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
    });
    // Display a success message if the connection is established
    console.log(`MongoDB connected: ${con.connection.host}`);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

module.exports = connectDB;
