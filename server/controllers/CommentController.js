const CommentModel = require("../models/CommentModel");
// .get comments
module.exports.list = (req, res) => {
   // comments represents data that is found with find() method
   CommentModel.find({}).exec().then(comments => {
      return res.json(comments);
   })
   .catch(err => {
      console.log("Error listing comments", err);
      return res.json(err);
   })
}

// .get comment by ID
module.exports.show = (req, res) => {
   let comment = CommentModel.findById(req.params.id).exec()
   .then(comment => {
      return res.json(comment);
   });
}

// .post new comment
module.exports.create = (req, res) => {
   // instantiating new instance of CommentModel class
   // using req.body data to fill in values for vehcile schema
   const comment = new CommentModel(req.body);
   // add new comment to comments array
   comment.save();
   // return array with added comment
   return res.json(comment);
}

// .put comment by ID
module.exports.update = (req, res) => {
   CommentModel.findById(request.params.id).exec().then((err, comment) => {
      if (err) return handleError(err);

      comment.body = "blah blah blah";
      comment.save((err, updComment) => {
         if (err) return handleError(err);
         res.send(updComment);
      })
   })
}
// .delete contact by ID
module.exports.remove = function remove(req, res) {
   return res.json({});
}