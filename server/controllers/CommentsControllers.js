const mongoose = require('mongoose');
const comments = require("../comments");
let CommentModel = requre('../models/CommentsModels.js')


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

//incorrect
CommentModel.find({}).exec()
.then(comments => {
  console.log(comments);
});

//correct??
module.exports.list = function list(request, response) {
    Comments.find({}).exec()
    .then(comments => {
        response.json(comments);
    })
};

UserModel.findById(request.params.id).exec()
.then(comment => {
 console.log(comment);
});

const newComment= new CommentModel(request.body);
newComment.save()
.then(savedComment => {
  response.json(savedComment);
});

CommentModel.findById(request.params.id).exec()
.then(comment => {
  comment.body = request.body.body || comment.body;
  return comment.save();
})
.then(comment => {
  response.json(comment);
});