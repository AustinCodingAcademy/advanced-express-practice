const Comment = require('../models/comment.model');


module.exports.comment_create = function (req, res) {
  let comment = new Comment(
      {
          body: req.body.body,
          

      }
  );


  comment.save(function (err) {
      if (err) {
          return next(err);
      }
      res.send('Comment created successfully')
  })
};

module.exports.comment_details = function (req, res) {
  Comment.findById(req.params.id, function (err, comment) {
      if (err) return next(err);
      res.send(comment);
  })
};

module.exports.comment_update = function (req, res) {
  Comment.findOneAndUpdate(req.params.id, {$set: req.body}, function (err, comment) {
      if (err) return next(err);
      res.send('Comment udpated.');
  });
};

module.exports.comment_delete = function (req, res) {
  Comment.findByIdAndRemove(req.params.id, function (err) {
      if (err) return next(err);
      res.send('Deleted successfully!');
  })
};

