const db = require("../models");

module.exports = function(app) {
  // GET route for getting all of the projects
  app.get("/api/allComments", function(req, res) {
    db.BlogComments.findAll({
      include: [
        {
          model: db.User,
          where: {},
          attributes: ["id", "username"],
          as: "commenter"
        }
      ]
    })
      .then(function(dbBlogComments) {
        res.send(dbBlogComments);
        console.log(dbBlogComments);
      })
      .catch(function(err) {
        res.json(err);
        console.log(err);
      });
  });

  // GET route for finding comments by the id of a comment
  app.get("/api/commentsId/:id", function(req, res) {
    db.BlogComments.findAll({
      where: {
        id: req.params.id
      },
      include: [
        {
          model: db.User,
          where: {},
          attributes: ["id", "username"],
          as: "commenter"
        }
      ]
    })
      .then(function(dbBlogComments) {
        res.json(dbBlogComments);
        console.log(dbBlogComments);
      })
      .catch(function(err) {
        res.json(err);
        console.log(err);
      });
  });

  // POST route for adding a new comment
  app.post("/api/newComment", function(req, res) {
    db.BlogComments.create({
      comment: req.body.comment,
      include: [
        {
          model: db.User,
          where: {},
          attributes: ["id", "username"],
          as: "commenter"
        }
      ]
    })
      .then(function(dbBlogComments) {
        res.json(dbBlogComments);
        console.log(dbBlogComments);
      })
      .catch(function(err) {
        res.json(err);
        console.log(err);
      });
  });

  // PUT route for updating a comment
  app.put("/updateComment", function(req, res) {
    db.BlogComments.update(req.body, {
      where: {
        id: req.body.id
      },
      include: [db.User]
    })
      .then(function(dbBlogComments) {
        res.json(dbBlogComments);
        console.log(dbBlogComments);
      })
      .catch(function(err) {
        res.json(err);
        console.log(err);
      });
  });

  // DELETE route for removing a comment
  app.delete("/deleteComment/:id", function(req, res) {
    db.BlogComments.destroy(req.body, {
      where: {
        id: req.body.id
      },
      include: [
        {
          model: db.User,
          where: {},
          attributes: ["id", "username"],
          as: "commenter"
        }
      ]
    })
      .then(function(dbBlogComments) {
        res.json(dbBlogComments);
        console.log(dbBlogComments);
      })
      .catch(function(err) {
        res.json(err);
        console.log(err);
      });
  });
};
