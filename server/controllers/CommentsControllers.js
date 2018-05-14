let CommentModel = require('../models/CommentsModels')

module.exports.list = function list(request, response) {
    CommentModel.find({}).exec()
    .then(comment => {
        response.json(comment);
    })
};


module.exports.show = function list(request, response) {
    CommentModels.findbyID(request.params.id).exec()
    .then(comment => {
        response.json(comment);
    })
};

module.exports.create =  function create(request, response){
    const newComment = new CommentModels(request.body);
    newComment.save()
    .then(savedComment => {
        response.json(savedComment);
    })
};