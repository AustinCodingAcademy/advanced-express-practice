import comments from "../comments";
import Comment from "../models/comments";

export const list = (request, response) => {
  Comment.find({}).exec()
  .then(comments => {
    return response.json(comments);
  });
}
export const show = (request, response) => {
  Comment.findById(request.params.id).exec()
  .then(comment => {
    return response.json(comment);
  });
}
export const create = (request, response) => {
  const comment = new Comment(request.body);
  comment.save()
  .then(c => {
    return response.json(c);
  });
}
