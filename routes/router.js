//File Name: router.js
//Student's Name: Ashutosh Kansal
//StudentID: 301233980
//Date: 22 June, 2023

const express = require("express");
var router = express.Router();
const { isAuthenticated } = require("../server/passportConfig");

const services = require("../server/services/render");
const controller = require("../server/controller/controller");

// Route for the home page
router.get("/", function (req, res, next) {
  res.render("index", { title: "Ashutosh's Portfolio" });
});

// Route for the contact page
router.get("/contact", function (req, res, next) {
  res.render("contact", { title: "Contact Me" });
});

// Route for the services page
router.get("/services", function (req, res, next) {
  res.render("services", { title: "Services" });
});

// Route for the projects page
router.get("/projects", function (req, res, next) {
  res.render("projects", { title: "Projects" });
});

// Route for the about page
router.get("/about", function (req, res, next) {
  res.render("about", { title: "About Me" });
});

// Route for the list of contacts page (requires authentication)
router.get("/listofcontacts", isAuthenticated, services.homeRoutes);

// Route for adding a user
router.get("/add-user", services.add_user);

// Route for updating a user
router.get("/update-user", services.update_user);

//API
router.post("/api/users", controller.create); // Create a new user
router.get("/api/users", controller.find); // Find users
router.put("/api/users/:id", controller.update); // Update a user
router.delete("/api/users/:id", controller.delete); // Delete a user

//exporting all the routes
module.exports = router;
