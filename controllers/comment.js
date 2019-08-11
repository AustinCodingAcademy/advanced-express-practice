const {getDatabase} = require('../database');
let db = getDatabase;
const collection = db.collection('comments');

let comments = require('../comments');

exports.list = function list(request, response) {
    let found = collection.find({});
    found.toArray(function(err, comments) {
      response.json(comments)
    });
}

exports.create = function(request, response) {
    let newComment = request.body;
    collection.insertMany(newComment);
    response.json(newComment);
}

exports.show = function(request, response) {
    let findComment = request.params.commentId;
    let comment = collection.find({_id: findComment});
    response.json(comment);
}
