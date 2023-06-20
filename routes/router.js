const express = require("express");
var router = express.Router();
const { isAuthenticated } = require("../server/passportConfig");

const services = require("../server/services/render");
const controller = require("../server/controller/controller");

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

router.get("/listofcontacts", isAuthenticated, services.homeRoutes);
router.get("/add-user", services.add_user);
router.get("/update-user", services.update_user);

//API
router.post("/api/users", controller.create);
router.get("/api/users", controller.find);
router.put("/api/users/:id", controller.update);
router.delete("/api/users/:id", controller.delete);

module.exports = router;
