import CommentModel from '../models/CommentModel';

export const list = (request, response) => {
  CommentModel.find({}).exec()
  .then(comments => {
    return response.json(comments);
  });
};
export const show = (request, response) => {
  CommentModel.findById(request.params.id).exec()
  .then(com => {
    return response.json(com);
  });
};
export const create = (request, response) => {
  const comment = new CommentModel({
    body: request.body.body
  });
  comment.save()
  .then(c => {
    return response.json(c);
  });
};
export const update = (request, response) => {
  return response.json({theId: request.params.id});
};
export const remove = (request, response) => {
  return response.json({});
};
