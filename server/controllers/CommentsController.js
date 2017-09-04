// import comments from "../comments";
import CommentModel from "../models/CommentModel";

//GET => List
export function list(request, response) {
  CommentModel.find({}).exec()
  .then(comments => {
    return response.json(comments);
  });
}

//GET/:id => Show
export function show(request, response) {
 CommentModel.findById(request.params.id).exec()
 .then(comment => {
   return response.json(comment);
 });
}

//POST => Create
export function create(request, response) {
  const comment = new CommentModel({
    body: request.body.body,
  });
  comment.save()
  .then(comment => {
    return response.json(comment);
  });
}

//PUT/:id => Update
export function update(request, response) {
 CommentModel.findById(request.params.id).exec()
 .then(comment => {
   comment.body = request.body.body || comment.body;
   return comment.save();
 })
 .then(comment => {
   return response.json(comment);
 })
}

//DELETE/:id => Remove
export function remove(request, response) {
 return response.json({});
}
