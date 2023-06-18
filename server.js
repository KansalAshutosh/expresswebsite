const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const bodyparser = require("body-parser");
const path = require("path");
const connectDB = require("./server/database/connection");

//mongoDB connection
connectDB();

const app = express();

dotenv.config({ path: "config.env" });
const PORT = process.env.PORT || 8080;

//logging http request into console
app.use(morgan("tiny"));

//pass request to body-parser
app.use(bodyparser.urlencoded({ extended: true }));

// view engine setup
app.set("views", "./views");
app.set("view engine", "ejs");

//loading assets
app.use(express.static("public"));
app.use(express.static(path.join(__dirname, "public")));

//importing routes
let indexRouter = require("./routes/router");
app.use("/", indexRouter);

//port
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
