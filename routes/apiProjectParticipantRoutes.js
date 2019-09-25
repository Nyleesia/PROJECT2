const db = require("../models");

module.exports = function(app) {
  // GET route for adding a participant
  app.get("/api/allParticipants/:projectsId?", function(req, res) {
    db.ProjectParticipant.findAll({
      where: { ProjectId: req.params.projectsId }
    })
      .then(function(dbProjectParticipant) {
        res.json(dbProjectParticipant);
      })
      .catch(function(err) {
        res.json(err);
        console.log(err);
      });
  });

  app.delete("/api/removeParticipant", function(req, res) {
    db.ProjectParticipant.destroy({
      where: {
        ProjectId: req.body.ProjectId,
        UserId: req.body.UserId
      }
    })
      .then(function(dbProjectParticipant) {
        res.json(dbProjectParticipant);
      })
      .catch(function(err) {
        res.json(err);
        console.log(err);
      });
  });

  app.post("/api/addParticipant", function(req, res) {
    db.ProjectParticipant.create({
      ProjectId: req.body.ProjectId,
      UserId: req.body.UserId,
      complete: false
    })
      .then(function(dbProjectParticipant) {
        res.json(dbProjectParticipant);
      })
      .catch(function(err) {
        res.json(err);
        console.log(err);
      });
  });

  // PUT route for updating participants
  app.put("/api/updateParticipants", function(req, res) {
    db.ProjectParticipant.update(req.body, {
      where: {
        ProjectId: req.body.ProjectId,
        UserId: req.body.UserId
      },
      complete: req.body.complete
    })
      .then(function(dbProjectParticipant) {
        res.json(dbProjectParticipant);
      })
      .catch(function(err) {
        res.json(err);
        console.log(err);
      });
  });
};
