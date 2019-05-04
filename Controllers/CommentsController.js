let comments = require('../comments');

exports.list = function list( req, res ) {
    return res.json(comments);
}

exports.show = function show( req, res ) {
    let id = Number(req.params.id);
    let comment = comments.find( c => c._id === id );
    return res.json(comment);
}

exports.create = function create( req, res ) {
    let newComment = req.body;
    newComment._id = comments[comments.length - 1]._id + 1;
    comments.push(newComment);
    return res.json(comments);
}