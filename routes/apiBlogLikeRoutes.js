const db = require("../models");

module.exports = function(app) {
  // Find likes
  app.get("/api/PostLikes/:id", function(req, res) {
    db.BlogLike.findAll({
      where: {
        blogId: req.params.id,
        like: 1
      },
      include: [db.User]
    })
      .then(function(dbBlogLike) {
        res.json(dbBlogLike);
        console.log(dbBlogLike);
      })
      .catch(function(err) {
        res.json(err);
        console.log(err);
      });
  });

  // Find likes by id
  app.get("/api/PostLikesByUser/:id", function(req, res) {
    db.BlogLike.findAll({
      where: {
        blogId: req.params.id,
        userName: req.body.userName
      }
    })
      .then(function(dbBlogLike) {
        res.json(dbBlogLike);
        console.log(dbBlogLike);
      })
      .catch(function(err) {
        res.json(err);
        console.log(err);
      });
  });

  // POST route for adding like
  app.post("/api/likeBlogId/:id", function(req, res) {
    db.BlogPost.create({
      blogId: req.params.id,
      userName: req.body.userName,
      like: 1,
      include: [db.User]
    })
      .then(function(dbBlogLike) {
        res.json(dbBlogLike);
        console.log(dbBlogLike);
      })
      .catch(function(err) {
        res.json(err);
        console.log(err);
      });
  });

  // UPDATE likes
  app.put("/api/updateLikePost/:id", function(req, res) {
    db.BlogPost.update(
      { like: 1, dislike: 0 },
      {
        where: {
          blogId: req.params.id
        },
        include: [db.User]
      })
      .then(function(dbBlogLike) {
        res.json(dbBlogLike);
        console.log(dbBlogLike);
      })
      .catch(function(err) {
        res.json(err);
        console.log(err);
      });
  });

  // DELETE a post
  app.delete("/api/removeLikePost/:id?", function(req, res) {
    db.BlogPost.destroy(req.body, {
      where: {
        blogId: req.parms.id,
        userName: req.body.userName
      },
      include: [db.users]
    })
      .then(function(dbBlogLike) {
        res.json(dbBlogLike);
        console.log(dbBlogLike);
      })
      .catch(function(err) {
        res.json(err);
        console.log(err);
      });
  });
};
