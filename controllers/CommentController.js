let comments = require("../comments.js")

exports.list =  function list(request, response) {
    return response.json(comments);
}
exports.show = function show(request, response) {
    let commentId =  Number(request.params.id)
    comments.find((aComment) => {
        if (aComment._id === commentId) {
            return response.json(aComment)
        }
    })
}
exports.create =  function create(request, response) {
    oldId = comments[comments.length - 1]._id
    let body  = request.body
    body._id = oldId + 1
    comments.push(body)
    return response.json(body);
}
exports.update =  function update(request, response) {
    return response.json({theId: request.params.id});
}
exports.remove =  function remove(request, response) {
    return response.json({});
}
