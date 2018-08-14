let comments = require("../comments.js");
let idCount = 4;

module.exports.list = function list(req, res, next) {
    return res.json(comments)
}
module.exports.show = function show(req, res, next) {
    let comID = comments.find((item) => { return item._id == req.params.id })
    return res.json(comID)
}
module.exports.create = function create(req, res, next) {
    idCount++;
    let newComment = {
        _id: idCount,
        body: req.body.body,
        postID: 1,
    }
    comments.push(newComment);
    return res.json(comments);
}
module.exports.update = function update(request, response, next) {
    return response.json({theId: request.params.id});
}
module.exports.remove = function remove(request, response, next) {
    return response.json({});
}
   