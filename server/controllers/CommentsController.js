import CommentModel from "../models/CommentModel";

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
  });
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


export function update(request, response) {
  CommentModel.findById(request.params.id).exec()
  .then(comment => {
    comment.body = request.body.body || comment.body;
    return comment.save();
  })
  .then(comment => {
    return response.json(comment);
  });
}

export function remove(request, response) {
  CommentModel.remove({_id: request.params.id}).exec()
  .then(res => {
    return response.send('delete comment successful');
  });
}