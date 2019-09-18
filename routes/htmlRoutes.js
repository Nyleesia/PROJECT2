const express = require("express");

const router = express.Router();

const isAuthenticated = require("../config/middleware/isAuthenticated");

router.get("/", function(req, res) {
  // If the user already has an account send them to the members page
  if (req.user) {
    return res.redirect("/members");
  }
  res.render("signup");
});

router.get("/login", function(req, res) {
  // If the user already has an account send them to the members page
  if (req.user) {
    return res.redirect("/members");
  }
  res.render("login");
});

// Here we've add our isAuthenticated middleware to this route.
// If a user who is not logged in tries to access this route they will be
//redirected to the signup page
router.get("/members", isAuthenticated, function(req, res) {
  res.render("members");
});

module.exports = router;
