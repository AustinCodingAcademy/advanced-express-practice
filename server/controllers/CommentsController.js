import CommentModel from "../models/Comment";

export function list(request, response) {
  CommentModel.find({}).exec()
  .then(comments => {
    return response.json(comments);
  });
}
export function show(request, response) {
  CommentModel.findById(request.params.id).exec()
  .then(comment => {
    return response.json(comment);
  })
}
export function create(request, response) {
  const comment = new CommentModel({
    body: request.body.body
  });
  comment.save()
  .then(comment => {
    return response.json(comment);
  });
}