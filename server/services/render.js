//File Name: render.js
//Student's Name: Ashutosh Kansal
//StudentID: 301233980
//Date: 22 June, 2023

const axios = require("axios");

exports.homeRoutes = (req, res) => {
  // Make a get request to /api/users
  axios
    .get("http://localhost:3000/api/users")
    .then(function (response) {
      res.render("listofcontacts", {
        users: response.data,
        title: "List of Contacts",
      });
    })
    .catch((err) => {
      res.send(err);
    });
};

exports.add_user = (req, res) => {
  // Render the 'add_user' view and pass the title as a variable

  res.render("add_user", { title: "Add-user" });
};

exports.update_user = (req, res) => {
  axios
    .get("http://localhost:3000/api/users", {
      params: { id: req.query.id },
    })
    .then(function (userdata) {
      // Render the 'update_user' view and pass the retrieved user data

      res.render("update_user", { user: userdata.data, title: "Add-user" });
    })
    .catch((err) => {
      res.send(err);
    });
};
