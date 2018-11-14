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
   CommentModel.findById(req.params.id).exec().then(comment => {
      comment.body = "This comment has been modified";
      comment.save();
      return res.json(comment);
   })
}
// .delete contact by ID
module.exports.remove = (req, res) => {
   CommentModel.findById(req.params.id).exec().then(comment => {
       comment.active = false;
       comment.save();
       return res.json(comment);
   });
}