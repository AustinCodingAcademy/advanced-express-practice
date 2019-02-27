let comments = require('../models/CommentModel');
//get request

exports.list =  function list(request, response) {
    return response.json(comments);
   }
   exports.show = function show(request, response) {
    let comment = comments.find(c=> c._id == request.params.id);
    return response.json(comment);
   }

   exports.create =  function create(request, response) {
    const temp = request.body
    temp["_id"] = comments.length +1;
    comments.push(temp);
    return response.json(temp);
   }
  