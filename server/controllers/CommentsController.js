import CommentModel from "../models/CommentModel";


export function list(request, response) {
  CommentModel.find({}).exec()
 .then(comments => {
   return response.json(comments);
 });
}
export function show(request, response) {
  let someComment = request.params.id;
  let oneComment = comments.find(function(comments){
  return someComment == comments._id;
    response.json(oneComment);
  })
}

export function create(request, response) {
  comments.push(request.body)
  return response.json({
  body:request.body.comments//body.bodY???
});
}

export function update(request, response) {
  return response.json({theId: request.params.id});
}
export function remove(request, response) {
  return response.json({});
}
