let CommentModel = require("../models/CommentModel");

module.exports.list =  function list(request, response) {
    CommentModel.find({}).exec().then(comments => {
        return response.send(comments);
    }); 
}

module.exports.show =  function show(request, response) {
    CommentModel.findById(request.params.id).exec().then(comment => {
        return response.json(comment);
    });
}
   
module.exports.create =  function create(req,res,next){
    const newcomment= new CommentModel(req.body);
    newcomment.save();
    return response.send(comments);
}
   
module.exports.update =  function update(req,res,next){
    CommentModel.findById(request.params.id).exec().then(comment => {
        comment.make = "Tom" ;
        comment.model = "Sawyer";
        comment.year = "Painter";
        return comment.save();
    })
    .then(comment => {
        return res.json(comment[index]);
    });
}
   
module.exports.remove =  function remove(req,res,next){
    CommentModel.findById(request.params.id).exec().then(comment => {
        comment[index].active = false;
        return comment.save();
    })
    .then(comment => {
        return res.json(comment[index]);
    });
}