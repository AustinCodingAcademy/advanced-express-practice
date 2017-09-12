import CommentModel from "../models/CommentModel";


export function list(request, response) {
  CommentModel.find({}).exec()
 .then(comments => response.json(comments));
 };


export function show(request, response) {
 CommentModel.findById(request.params.id).exec()
  .then(comments => {
   return response.json(comments);
});
}




  // let someComment = request.params.id;
  // let oneComment = comments.find(function(comments){
  // return someComment == comments._id;
  //   response.json(oneComment);
  // })

//
export function create(request, response) {
  const comment = new CommentModel({
  body: request.body.body,
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
