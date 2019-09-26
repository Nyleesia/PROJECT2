const db = require("../models");
const express = require("express");
const router = express.Router();

// Find likes
router.get("/PostLikes/:id", function(req, res) {
  db.BlogLikes.findAll({
    where: {
      blogId: req.params.id,
      likes: 1
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

// Find likes by blog and id
router.get("/Post/Blog/:blogId/User/:id", function(req, res) {
  db.BlogLikes.findAll({
    where: {
      likersId: req.params.id,
      blogId: req.params.blogId
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
router.post("/likeBlogId/:id", function(req, res) {
  db.BlogLikes.create({
    blogId: req.params.id,
    userName: req.body.userName,
    likersId: req.body.likersId,
    blogLikesId: req.body.blogLikesId,
    likes: 1,
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
router.put("/updateLikePost/:id", function(req, res) {
  db.BlogLikes.update(
    { like: 1, dislike: 0 },
    {
      where: {
        blogId: req.params.id
      },
      include: [db.User]
    }
  )
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
router.delete("/removeLikePost/:id?", function(req, res) {
  db.BlogLikes.destroy({
    where: {
      blogId: req.params.id,
      likersId: req.body.likersId
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

router.delete("/removeLikesBlog/:id?", function(req, res) {
  db.BlogLikes.destroy({
    where: {
      blogId: req.params.id
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

module.exports = router;
