const db = require("../models");
const passport = require("../config/passport");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, "public/uploads");
  },
  filename: function(req, file, cb) {
    cb(null, file.fieldname + "-" + Date.now());
  }
});

const upload = multer({ storage: storage });

const express = require("express");

const router = express.Router();

router.post(
  "/login",
  upload.single("avatar"),
  passport.authenticate("local"),
  function(req, res) {
    res.json("/profiles");
  }
);

router.post("/signup", upload.single("avatar"), function(req, res) {
  db.User.create({
    email: req.body.email,
    password: req.body.password,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    userName: req.body.userName,
    userPhoto: req.file.path
  })
    .then(function() {
      console.log("success");
      res.redirect(307, "/api/login");
    })
    .catch(function(err) {
      console.log(err);
      res.json(err);
    });
});

//
// Route for getting some data about our user to be used client side
router.get("/user_data", function(req, res) {
  if (!req.user) {
    // The user is not logged in, send back an empty object
    res.json({});
  } else {
    // Otherwise send back the user's email and id
    // Sending back a password, even a hashed password, isn't a good idea
    res.json({
      email: req.user.email,
      id: req.user.id
    });
  }
});

module.exports = router;
