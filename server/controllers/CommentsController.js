let comments = require('../comments');
//get request

exports.list =  function list(request, response) {
    return response.json(comments);
   }
   exports.show = function show(request, response) {
    return response.json(comments[request.params.id - 1]);
   }
   exports.create =  function create(request, response) {
    const temp = request.body
    temp["_id"] = comments.length +1;
    comments.push(temp);
    return response.json(temp);
   }
  