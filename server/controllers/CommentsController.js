import comments from "../comments";
import CommentModel from "../models/CommentModel";


export function list(request, response) {
  CommentModel.find({}).exec()
 .then(users => {
   return response.json(comments);
 });
}
export function show(request, response) {
  let someComment = request.params.id;
  let oneComment = comments.find(function(comment){
  return someComment == comments._id;
    response.json(oneComment);
  })
}

export function create(request, response) {
  comments.push(request.body)
  return response.json({
  body:request.body.body//body.bodY???
});
}
export function update(request, response) {
  return response.json({theId: request.params.id});
}
export function remove(request, response) {
  return response.json({});
}
