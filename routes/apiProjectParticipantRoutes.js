const db = require("../models");

module.exports = function(app) {
  // GET route for adding a participant
  app.post("/api/allParticipants", function(req, res) {
    db.ProjectParticipant.findAll({
      include: [
        {
          model: db.User,
          where: { projectsId: req.params.projectsId },
          attributes: ["id", "username"],
          as: "attendees"
        }
      ]
    })
      .then(function(dbProjectParticipant) {
        res.send(dbProjectParticipant);
        console.log(dbProjectParticipant);
      })
      .catch(function(err) {
        res.json(err);
        console.log(err);
      });
  });

  // PUT route for updating participants
  app.put("/updateParticipants", function(req, res) {
    db.ProjectParticipant.update(req.body, {
      where: {
        id: req.body.id
      },
      include: [db.User]
    })
      .then(function(dbProjectParticipant) {
        res.json(dbProjectParticipant);
        console.log(dbProjectParticipant);
      })
      .catch(function(err) {
        res.json(err);
        console.log(err);
      });
  });

  // DELETE route for removing a participant
  app.delete("/deleteProject/:id", function(req, res) {
    db.ProjectParticipant.destroy(req.body, {
      where: {
        id: req.body.id
      },
      include: [db.User]
    })
      .then(function(dbProjectParticipant) {
        res.json(dbProjectParticipant);
        console.log(dbProjectParticipant);
      })
      .catch(function(err) {
        res.json(err);
        console.log(err);
      });
  });
};
