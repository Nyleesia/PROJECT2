const db = require("../models");
const express = require("express");
const router = new express.Router();

router.post("/user/updatePhoto", function(req, res) {
  console.log(req.body);
  if (!req.body.userPhoto) {
    return res.json({ err: "no photo provided" });
  } else if (!req.body.userEmail) {
    return res.json({ err: "no user specified" });
  }
  db.User.update(
    { userPhoto: req.body.userPhoto },
    { where: { email: req.body.userEmail } }
  )
    .then(data => {
      return res.json(data);
    })
    .catch(err => res.json(err));
});

router.post("/user/updateName", function(req, res) {
  console.log(req.body);
  if (!req.body.lastName || !req.body.lastName) {
    return res.json({ err: "Please specify both first and last name" });
  }
  db.User.update(
    { firstName: req.body.firstName },
    { lastName: req.body.lastName },
    { where: { email: req.body.userEmail } }
  )
    .then(data => {
      return res.json(data);
    })
    .catch(err => res.json(err));
});

module.exports = router;
