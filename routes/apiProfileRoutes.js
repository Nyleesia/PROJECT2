const db = require("../models");

module.exports = function(app) {
  // GET route for getting all of the user profiles
  app.get("/api/allUsers", function(req, res) {
    db.User.findAll({
      include: [db.BlogPost]
    })
      .then(function(dbUser) {
        res.send(dbUser);
        console.log(dbUser);
      })
      .catch(function(err) {
        res.json(err);
        console.log(err);
      });
  });

  // GET route for getting user profile by name
  app.get("/api/userName/:userName", function(req, res) {
    db.User.findAll({
      where: {
        userName: req.params.userName
      },
      include: [db.BlogPost]
    })
      .then(function(dbUser) {
        res.send(dbUser);
        console.log(dbUser);
      })
      .catch(function(err) {
        res.json(err);
        console.log(err);
      });
  });

  // GET route for getting user profile by id
  app.get("/api/userId/:id", function(req, res) {
    db.User.findAll({
      where: {
        id: req.params.id
      },
      include: [db.BlogPost]
    })
      .then(function(dbUser) {
        res.send(dbUser);
        console.log(dbUser);
      })
      .catch(function(err) {
        res.json(err);
        console.log(err);
      });
  });
};
