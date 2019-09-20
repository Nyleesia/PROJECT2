const express = require("express");

const router = express.Router();

const isAuthenticated = require("../config/middleware/isAuthenticated");

router.get("/", function(req, res) {
  if (req.user) {
    return res.redirect("/account");
  }
  res.redirect("/login");
});

router.get("/account", function(req, res) {
  if (!req.user) {  
    return res.redirect("/login");
  }
  res.render("account");
})

router.get("/login", function(req, res) {
  if (req.user) {  
    return res.redirect("/account");
  }
  res.render("login");
});

// Here we've add our isAuthenticated middleware to this route.
// If a user who is not logged in tries to access this route they will be
//redirected to the signup page
router.get("/events/:id?", isAuthenticated, function(req, res) {
  res.render("events");
});

module.exports = router;
