const Comment = require("../models/CommentModel");

exports.list = function list(request, response) {
    Comment.find().exec().then((comments)=>{
        return response.json(comments);
    })
}

exports.show = function show(request, response) {
    Comment.findById(request.params.id).exec().then((product)=> {
        return response.json(product);
    })
}

exports.create =  function create(request, response) {
    
    const newComment = new Comment({
        body: request.body
    })
    newComment.save.then(savedComment=>{
        console.log(savedComment)
    })    
}

exports.update =  function update(request, response) {
    return response.json({theId: request.params.id});
}

exports.remove =  function remove(request, response) {
    return response.json({});
   }