//const comments = require("../comments");
const Comment = require("../models/Comment");

function list(request, response) {
    Comment.find({}).exec()
    .then(comments => {
        return response.json(comments); 
    });
}

function show(request, response) {
    Comment.findById(request.params.id).exec()
    .then(comment => {
      return response.json(comment);
    });
}

function create(request, response) {
    const comment = new Comment({
        body: request.body.body
    });
    comment.save()
    .then(comments => {
      return response.json(comments);
    });
}

module.exports = {
    list,
    show,
    create
}

/*export function update(request, response) {
    return response.json({theId: request.params.id});
}

export function remove(request, response) {
    return response.json({});
}*/