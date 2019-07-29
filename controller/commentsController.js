let comments = require("../comments");

exports.list = function list(req, res) {
    res.json(comments)
}

exports.show = function show(req, res) {
    let comment = comments.find(p=>p._id == req.params.idNum);
    res.json(comment)
}

exports.create = function create(req, res) {
    let newComment = req.body;
    comments.push(newComment);
    res.json(newComment)
}

exports.update = function update(req, res) {
    let comment = comments.find(p=>p._id == req.params.idNum);
    comment.make = body.make;
    res.json(comment)
}

exports.remove = function remove(req, res) {
    let comment = comments.find(p=>p._id == req.params.idNum);
    comment.isActive = false;
    res.send("deleted")
}