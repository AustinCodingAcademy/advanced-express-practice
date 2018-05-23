
let Comment = require("../models/commentModel")

module.exports.list =  function list(request, response) {
    Comment.find({}).exec()
    .then(comments => response.json(comments))
};
module.exports.show =  function show(request, response) {
    Comment.findById({"_id": request.params.id}).exec()
    .then(comment => response.json(comment))
};

module.exports.create =  function create(request, response) {
    const newComment = new Comment({
        "body": request.body.body
    });
    newComment.save()
    .then(savedComment => response.json(savedComment))
};

module.exports.remove =  function remove(request, response) {
    const comment = comments.find(comment => comment["_id"] == request.params.id)
    comments = comments.filter(comment => comment["_id"] != request.params.id)
    return response.json(comments);
}