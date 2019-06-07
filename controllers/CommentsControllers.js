let comments = require("../comments");

//Display all comments
exports.list = function(req,res){
    res.json(comments)
}

//Display one comment
exports.show = function(req,res){
    let commentId = Number(req.params.id);
    let comment = comments.find(c  => c._id === commentId);
    res.json(comment)
}

//handle comment post
exports.create = function(req,res){
    let comment = req.body;
    comment._id = comments.length + 1;
    comments.push(comment);
    res.json(comment); 
};