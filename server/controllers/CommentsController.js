const comments = require("../comments");

exports.list =  function list(request, response) {
    return response.json(comments);
   }
   exports.show = function show(request, response) {
    const viewComment = comments.find(c=>c._id == request.params.id);
    return response.json(viewComment);
   }
   exports.create =  function create(request, response) {
    console.log('creating stuff')
    const newComment = request.body;
    comments.push(newComment);
    return response.json(newComment);
   }
   exports.update =  function update(request, response) {
    return response.json({theId: request.params.id});
   }
   exports.remove =  function remove(request, response) {
    return response.json({});
   }