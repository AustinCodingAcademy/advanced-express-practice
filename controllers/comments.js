let comments = require("../comments");

//get - returns all 
exports.list =  function list(request, response) {
    return response.json(comments);
}
//get one Comment by id
   exports.show = function show(request, response) {
    let comment = comments.filter (p=>p._id == request.params.id);
    response.json(comment);
}

//post
   exports.create =  function create(request, response) {
    let newComment = request.body;
    comments.push(newComment);
    response.json(newComment)
}

//put
   exports.update =  function update(request, response) {
    let comment = comments.find (p=>p._id == request.params.id);
    comment.make = body.make;
    response.json(comment);
}

//delete
   exports.remove =  function remove(request, response) {
    let comment = comments.find(i => i._id == request.params.commentId);
    comment.isActive = false;
    response.send("deleted");
}
   