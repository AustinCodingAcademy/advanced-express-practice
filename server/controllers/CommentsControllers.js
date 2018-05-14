const mongoose = require('mongoose');
const comments = require("../comments");
let CommentModels = require('../models/CommentsModels.js')


//defined what each http command will do
// module.exports.list =  function list(request, response) {
//     return response.json(comments);
// }

// module.exports.show =  function show(request, response) {
//     return response.json(comments.find(user => user._id == request.params.id));
// }

// module.exports.create =  function create(request, response) {
//     const newComment = request.body;
//     comments.push(newComment);
//     return response.json(newComment);
// }

// module.exports.update =  function update(request, response) {
//     return response.json({theId: request.params.id});
// }

// module.exports.remove =  function remove(request, response) {
//     return response.json(comments.pop(user => user._id == request.params.id))
// }


module.exports.list = function list(request, response) {
    CommentModels.find({}).exec()
    .then(commentModel => {
        response.json(commentModel);
    })
};


module.exports.show = function list(request, response) {
    CommentModels.findbyID(request.params.id).exec()
    .then(comment => {
        response.json(comment);
    })
};

module.exports.create =  function create(request, response){
    const newComment = new commentModel(request.body);
    newComment.save()
    .then(savedComment => {
        response.json(savedComment);
    })
};