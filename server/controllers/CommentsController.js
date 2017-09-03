// import comments from "../comments";
import CommentModel from "../models/CommentModel";


export function list(request, response) {
 // return response.json(comments);
 let promise = CommentModel.find({}).exec();
 promise.then(comments => {
   return response.json(comments);
 })
}

export function show(request, response) {
 // return response.json({theId: request.params.id});
 Comment.findOne({id: request.params.id}).exec()
 .then(foundComment => {
   return response.json(foundComment);
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

export function update(request, response) {
 return response.json({theId: request.params.id});
}

export function remove(request, response) {
 return response.json({});
}
