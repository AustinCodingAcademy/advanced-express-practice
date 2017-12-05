import comments from "../comments";
import CommentsModel from "../models/CommentsModel"

// this function excepts a request and response and returns all of the items 
// in said schema
export function list(request, response) {
  CommentsModel.find({}).exec()
  .then(comments => {
    return response.json(comments)
  });
}
export function show(request, response) {
  let id = request.params.id;
  CommentsModel.findById(id).exec()
  .then(comment => {
    return response.json(comment);
  });
}

export function create(request, response) {
  const comment = new CommentsModel(request.body)
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
