// Create web server

var express = require("express");
var router = express.Router();
var comments = require("../models/comments");

// GET: /comments
// Return all comments
router.get("/", function (req, res, next) {
  comments.selectAll(function (result) {
    res.json(result);
  });
});

// POST: /comments
// Create new comment
router.post("/", function (req, res, next) {
  var data = {
    name: req.body.name,
    comment: req.body.comment,
  };
  comments.insertComment(data, function (result) {
    res.json(result);
  });
});

module.exports = router;
