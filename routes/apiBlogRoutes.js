const db = require("../models");

module.exports = function(app) {
  // GET route for getting all of the posts
  app.get("/api/allPosts", function(req, res) {
    db.BlogPost.findAll({})
      .then(function(dbBlogPost) {
        res.json(dbBlogPost);
        console.log(dbBlogPost);
      })
      .catch(function(err) {
        res.json(err);
      });
  });

  // Find a post by the id of that post
  app.get("/api/Post/:id", function(req, res) {
    db.BlogPost.findAll({
      where: {
        id: req.params.id
      },
      include: [db.User]
    })
      .then(function(dbBlogPost) {
        res.json(dbBlogPost);
      })
      .catch(function(err) {
        res.json(err);
      });
  });

  //   // Find a post by the userName of the user who created that post
  //   app.get("/api/Post/:userName", function(req, res) {
  //     db.BlogPost.findAll({
  //       include: [db.User],
  //       where: {
  //         userName: req.params.userName
  //       }
  //     })
  //       .then(function(BlogPost) {
  //         res.json(BlogPost);
  //       })
  //       .catch(function(err) {
  //         res.json(err);
  //       });
  //   });
  // };

  // POST route for adding a new post
  app.post("/api/newPost", function(req, res) {
    db.BlogPost.create({
      userName: req.body.userName,
      blogPhoto: req.body.blogPhoto,
      BlogPost: req.body.blogPost,
      include: [db.User]
    })
      .then(function(dbBlogPost) {
        res.json(dbBlogPost);
        console.log(dbBlogPost);
      })
      .catch(function(err) {
        res.json(err);
      });
  });

  // UPDATE a post
  app.put("/api/updatePost", function(req, res) {
    db.BlogPost.update(req.body, {
      where: {
        id: req.body.id
      },
      include: [db.User]
    })
      .then(function(dbBlogPost) {
        res.json(dbBlogPost);
      })
      .catch(function(err) {
        res.json(err);
      });
  });

  // DELETE a post
  app.delete("/api/deletePost/:id?", function(req, res) {
    db.BlogPost.destroy(req.body, {
      where: {
        id: req.body.id
      },
      include: [db.users]
    })
      .then(function(dbBlogPost) {
        res.json(dbBlogPost);
      })
      .catch(function(err) {
        res.json(err);
      });
  });
};
