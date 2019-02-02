const comments = require("../comments");

exports.list =  function list(request, response) {
    return response.json(comments);
   }
   exports.show = function show(request, response) {
    const comment = comments.find(c=>c._id == request.params.id);
    return response.json(comment);
   }
   exports.create =  function create(request, response) {
    console.log('creating stuff')
    const comment = request.body;
    comments.push(comment);
    return response.json(product);
   }
   exports.update =  function update(request, response) {
    return response.json({theId: request.params.id});
   }
   exports.remove =  function remove(request, response) {
    return response.json({});
   }