let comments = require("../comments")

exports.list = function list(req, res) {
    return res.json(comments)
}

exports.show = function show(req, res) {
    let comment = comments.find(p => p._id == req.params.id);
    return res.json(comment)
}

exports.create = function create(req, res) {
    let comment = req.body;
    comments.push(comment);
    res.json(comment)
}

exports.update = function update(res, req) {
    let comment = comments.find(p => p._id == req.params.id);
    comment.make = body.make;
    res.json(comment)
}

exports.remove = function remove(res, req) {
    let comment = comments.find(p => p._id == req.params.id)
    comment.isActive == false;
    res.send("deleted")
}