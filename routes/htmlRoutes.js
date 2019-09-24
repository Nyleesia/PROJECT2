const express = require("express");
const db = require("../models");
const router = express.Router();

const isAuthenticated = require("../config/middleware/isAuthenticated");

// base route redirects to login if user not logged in
router.get("/", isAuthenticated, function(req, res) {
  return res.redirect("/profiles");
});

// account page redirects user to login if not logged in
router.get("/profiles/:id?", isAuthenticated, function(req, res) {
  res.render("profiles", { user: req.user });
});

// login route redirects user to account page if logged in
router.get("/login", function(req, res) {
  if (req.user) {
    return res.redirect("/profile");
  }
  res.render("login");
});

// Here we've add our isAuthenticated middleware to this route.
// If a user who is not logged in tries to access this route they will be
//redirected to the signup page
router.get("/projects/:id?", isAuthenticated, function(req, res) {
  db.Project.findAll({
    include: [
      {
        model: db.User,
        attributes: ["id", "username"],
        as: "attendees"
      }
    ]
  }).then(data => {
    console.log(data);
    res.render("projects", {
      user: req.user,
      projects: data,
      view: req.params.id || false
    });
  });
});

module.exports = router;
