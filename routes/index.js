const express = require("express");
const app = express();
var router = express.Router();

router.get("/", function (req, res, next) {
  res.render("index", { title: "Ashutosh's Portfolio" });
});

router.get("/contact", function (req, res, next) {
  res.render("contact", { title: "Contact Me" });
});

router.get("/services", function (req, res, next) {
  res.render("services", { title: "Services" });
});

router.get("/projects", function (req, res, next) {
  res.render("projects", { title: "Projects" });
});

router.get("/about", function (req, res, next) {
  res.render("about", { title: "About Me" });
});

module.exports = router;
