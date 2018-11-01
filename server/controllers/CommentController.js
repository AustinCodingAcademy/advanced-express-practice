let comments = require("../comments");

module.exports.list =  function list(request, response) {
    return response.send(comments);
}

module.exports.show =  function show(request, response) {
    const comment = comments.find(comments => comments._id == request.params.id);
    response.json(comment);
    return response.json({id: request.params.id});
}
   
module.exports.create =  function create(req,res,next){
    comments.push(req.body);
    comments[comments.length-1]._id = comments[comments.length-2]._id + 1;
    return res.json(comments[comments.length-1]);
}
   
module.exports.update =  function update(req,res,next){
    const index = comments.findIndex(comments => comments._id == req.params.id);
    comments[index].name = "Zack"
    res.json(comments);
    return res.json(comments[index]);
}
   
module.exports.remove =  function remove(req,res,next){
    const index = comments.findIndex(comments => comments._id == req.params.id);
    comments[index].active = false;
    return res.json("deleted");
}