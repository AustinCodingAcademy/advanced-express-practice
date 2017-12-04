import comments from "../comments";
import CommentsModel from "../models/CommentsModel"

export function list(request, response) {
  CommentsModel.find({}).exec()
  .then(comments => {
    return response.json(comments)
  });
}
export function show(request, response) {
  let id = request.params.id;
  CommentModel.findById(id).exec()
  .then(comment => {
    return response.json(comment);
  });
  // console.log(id);
  // let comment = comments.find(comment => comment._id == id) || {};
  // return response.json(comment);
}

export function create(request, response) {
  const comment = new CommentModel({
    body: request.body.body
  });
  comment.save()
  .then(comment => {
    return response.json(comment)
  });
}

 


export function update(request, response) {
  return response.json(comments[0].name = request.params.id);
}
export function remove(request, response) {
  return response.json(comments.pop());
}
