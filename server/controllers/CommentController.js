let comments = require("./comments");
const idCount = 4;

export function list(request, response) {
    return res.json(comments)
}
export function show(request, response) {
    let comID = comments.find((item) => { return item._id == req.params.id })
    return res.json(comID)
}
export function create(request, response) {
    idCount++;
    let newComment = {
        _id: idCount,
        body: req.body.body,
        postID: 1,
    }
    comments.push(newComment);
    return res.json(comments);
}
export function update(request, response) {
    return response.json({theId: request.params.id});
}
export function remove(request, response) {
    return response.json({});
}
   