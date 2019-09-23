const db = require("../models");
const sequelize = require("sequelize");

module.exports = function(app) {
  // GET route for getting all of the projects
  app.get("/api/allProjects", function(req, res) {
    db.Project.findAll({
      include: [
        {
          model: db.User,
          where: {},
          attributes: ["id", "username"],
          as: "attendees"
        }
      ]
    })
      .then(function(dbProject) {
        res.send(dbProject);
        console.log(dbProject);
      })
      .catch(function(err) {
        res.json(err);
        console.log(err);
      });
  });

  // GET route for getting all incompleted projects
  app.get("/api/incompletedProjects", function(req, res) {
    db.Project.findAll({
      where: {
        completed: false
      },
      include: [db.User]
    })
      .then(function(dbProject) {
        res.json(dbProject);
        console.log(dbProject);
      })
      .catch(function(err) {
        res.json(err);
        console.log(err);
      });
  });

  // GET route for getting all completed projects
  app.get("/api/completedProjects", function(req, res) {
    db.Project.findAll({
      where: {
        completed: true
      },
      include: [db.User]
    })
      .then(function(dbProject) {
        res.json(dbProject);
        console.log(dbProject);
      })
      .catch(function(err) {
        res.json(err);
        console.log(err);
      });
  });

  // GET route for finding upcoming projects
  app.get("/api/upcomingProjects", function(req, res) {
    db.Project.findAll({
      where: {
        eventDate: {
          [sequelize.Op.gt]: new Date()
        }
      },
      include: [db.User]
    })
      .then(function(dbProject) {
        res.json(dbProject);
        console.log(dbProject);
      })
      .catch(function(err) {
        res.json(err);
        console.log(err);
      });
  });

  // GET route for finding past projects
  app.get("/api/pastProjects", function(req, res) {
    db.Project.findAll({
      where: {
        eventDate: {
          [sequelize.Op.lt]: new Date()
        }
      },
      include: [db.User]
    })
      .then(function(dbProject) {
        res.json(dbProject);
        console.log(dbProject);
      })
      .catch(function(err) {
        res.json(err);
        console.log(err);
      });
  });

  // GET route for finding projects by the id of a project
  app.get("/api/projectsId/:id", function(req, res) {
    db.Project.findAll({
      where: {
        id: req.params.id
      },
      include: [db.User]
    })
      .then(function(dbProject) {
        res.json(dbProject);
        console.log(dbProject);
      })
      .catch(function(err) {
        res.json(err);
        console.log(err);
      });
  });

  // GET route for finding a project created by a specific user
  app.get("/api/projectsName/:userName", function(req, res) {
    db.Project.findAll({
      where: {
        userName: req.params.userName
      },
      include: [db.User]
    })
      .then(function(dbProject) {
        res.json(dbProject);
        console.log(dbProject);
      })
      .catch(function(err) {
        res.json(err);
        console.log(err);
      });
  });

  // POST route for adding a new project
  app.post("/api/newProject", function(req, res) {
    db.Project.create({
      description: req.body.description,
      eventDate: req.body.eventDate,
      eventTime: req.body.eventTime,
      photo: req.body.photo,
      capacity: req.body.capacity,
      participantCount: req.body.participantCount,
      completed: req.body.completed,
      include: [db.User]
    })
      .then(function(dbProject) {
        res.json(dbProject);
        console.log(dbProject);
      })
      .catch(function(err) {
        res.json(err);
        console.log(err);
      });
  });

  // PUT route for updating a project
  app.put("/updateProject", function(req, res) {
    db.Projects.update(req.body, {
      where: {
        id: req.body.id
      },
      include: [db.User]
    })
      .then(function(dbProjects) {
        res.json(dbProjects);
        console.log(dbProject);
      })
      .catch(function(err) {
        res.json(err);
        console.log(err);
      });
  });

  // DELETE route for removing a project
  app.delete("/deleteProject/:id", function(req, res) {
    db.Projects.destroy(req.body, {
      where: {
        id: req.body.id
      },
      include: [db.User]
    })
      .then(function(dbProjects) {
        res.json(dbProjects);
        console.log(dbProject);
      })
      .catch(function(err) {
        res.json(err);
        console.log(err);
      });
  });
};