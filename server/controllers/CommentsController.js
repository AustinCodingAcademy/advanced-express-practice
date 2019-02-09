// const comments = require("../comments");
const Comment = require("../models/CommentModel");

// get request
module.exports.list = (request, response) => {
  Comment.find({}).exec().then((comments) => {
    return response.json(comments);
  });
};

// get by id request
module.exports.show = (request, response) => {
  Comment.findById(request.params.id).exec().then((comment) => {
    return response.json(comment);
  });
};

// post request
module.exports.create = (request, response) => {
  const c = new Comment({
    body: request.body.body
  });
  c.save().then(saveComment => {
    return response.json(saveComment);
  });
};

// put request
exports.update = function update(request, response) {
  return response.json({theId: request.params.id});
};

// delete request
exports.remove = function remove(request, response) {
  return response.json({});
};
