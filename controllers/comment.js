let CommentModel = require("../models/CommentModel")

//get - return all comments
exports.list = function list(req, res) {
    CommentModel.find(function (err, comments){
        if (err) return  console.error(err);
        return res.json(comments);
    })
}

//get one comment by id
exports.show = function show(req, res) {
    CommentModel.findById(req.params.commentId, function (err, comment){
        if (err) return  console.error(err);
        return res.json(comment);
    })
}

//post 
exports.create = function create(req, res) {
    const newComment = new CommentModel(req.body);
    newComment.save((err, v) => {
        res.json(v);
    });
}

//put
exports.update = function update(req, res) {
    let comment = comments.find(i => i._id == req.params.commentId);
    comment.body = body.body;
    res.json(comment)
}

//delete
exports.remove = function remove(req, res) {
    let comment = comments.find(i => i._id == req.params.commentId);
    comment.isActive = false;
    res.send("deleted")
}