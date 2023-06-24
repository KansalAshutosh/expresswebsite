//File Name: server.js
//Student's Name: Ashutosh Kansal
//StudentID: 301233980
//Date: 22 June, 2023

// Import required packages
const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const bodyparser = require("body-parser");
const path = require("path");
const connectDB = require("./server/database/connection");
const app = express();

// Connect to MongoDB
connectDB();

//Using passportConfig
const passport = require("passport");
const { initializingPassport } = require("./server/passportConfig");
const expressSession = require("express-session");
initializingPassport(passport);

// Parse JSON bodies

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configure session middleware
app.use(
  expressSession({
    secret: "session",
    resave: "false",
    saveUninitialized: "false",
  })
);

// Initialize Passport and session
app.use(passport.initialize());
app.use(passport.session());

// Render login page
app.get("/login", (req, res) => {
  res.render("login", { title: "Login " });
});

// Authenticate user login
app.post(
  "/login",
  passport.authenticate("local", {
    failureRedirect: "/login",
    successRedirect: "/listofcontacts",
  })
);

// Handle user logout
app.get("/logout", (req, res) => {
  req.logout(function (err) {
    if (err) {
      // Handle any error that occurred during logout
      console.error(err);
    }
    // Additional actions or redirects after logout
    res.render("logout", { title: "Logout " });
  });
});

// Load environment variables
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
