const Comment = require("../models/CommentModel");

// GET request
exports.list = function list(request, response) {
    Comment.find().exec().then((comments) => {
        return response.json(comments);
    });
};

// GET with an ID
exports.show = function show(request, response) {
    Comment.findById(request.params.id).exec().then((comment) => {
        return response.json(comment);
    });
};

// POST request
module.exports.create = function create(request, response) {
    const newComment = new Comment(
        request.body
    );
    newComment.save().then(savedComment => {
        response.json(savedComment);
    });
};
