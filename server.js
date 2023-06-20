const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const bodyparser = require("body-parser");
const path = require("path");
const connectDB = require("./server/database/connection");

//mongoDB connection
connectDB();

// const User = require("./server/model/model02");
const passport = require("passport");
// const {
//   initializingPassport,
//   isAuthenticated,
// } = require("./server/passportConfig");


const { initializingPassport } = require("./server/passportConfig");
const expressSession = require("express-session");
const app = express();

initializingPassport(passport);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  expressSession({
    secret: "session",
    resave: "false",
    saveUninitialized: "false",
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.get("/login", (req, res) => {
  res.render("login");
});

app.post(
  "/login",
  passport.authenticate("local", {
    failureRedirect: "/login",
    successRedirect: "/listofcontacts",
  })
);

app.get("/logout", (req, res) => {
  req.logout(function (err) {
    if (err) {
      // Handle any error that occurred during logout
      console.error(err);
    }
    // Additional actions or redirects after logout
    res.send("you are logged out sir ");
  });
});

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
