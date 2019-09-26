const db = require("../models");
const express = require("express");
const router = express.Router();

// GET route for getting all of the posts
router.get("/allPosts", function(req, res) {
  db.BlogPost.findAll({})
    .then(function(dbBlogPost) {
      res.json(dbBlogPost);
      console.log(dbBlogPost);
    })
    .catch(function(err) {
      res.json(err);
      console.log(err);
    });
});

// Find a post by the id of that post
router.get("/Post/:id", function(req, res) {
  db.BlogPost.findAll({
    where: {
      id: req.params.id
    },
    include: [db.User]
  })
    .then(function(dbBlogPost) {
      res.json(dbBlogPost);
      console.log(dbBlogPost);
    })
    .catch(function(err) {
      res.json(err);
      console.log(err);
    });
});

// Find a post by the userName of the user who created that post
router.get("/PostName/:userName", function(req, res) {
  db.BlogPost.findAll({
    where: {
      userName: req.params.userName
    }
  })
    .then(function(dbBlogPost) {
      res.json(dbBlogPost);
      console.log(dbBlogPost);
    })
    .catch(function(err) {
      res.json(err);
      console.log(err);
    });
});

// POST route for adding a new post
router.post("/newPost", function(req, res) {
  db.BlogPost.create({
    userName: req.body.userName,
    UserId: req.body.userId,
    title: req.body.title,
    blogPhoto: req.body.blogPhoto,
    blogPost: req.body.blogPost,
    include: [db.User]
  })
    .then(function(dbBlogPost) {
      res.json(dbBlogPost);
      console.log(dbBlogPost);
    })
    .catch(function(err) {
      res.json(err);
      console.log(err);
    });
});

// UPDATE a post
router.put("/updatePost", function(req, res) {
  db.BlogPost.update(req.body, {
    where: {
      id: req.body.id
    },
    include: [db.User]
  })
    .then(function(dbBlogPost) {
      res.json(dbBlogPost);
      console.log(dbBlogPost);
    })
    .catch(function(err) {
      res.json(err);
      console.log(err);
    });
});

// DELETE a post
router.delete("/deletePost/:id?", function(req, res) {
  db.BlogPost.destroy({
    where: {
      id: req.body.id
    }
  })
    .then(function(dbBlogPost) {
      res.json(dbBlogPost);
      console.log(dbBlogPost);
    })
    .catch(function(err) {
      res.json(err);
      console.log(err);
    });
});

module.exports = router;
