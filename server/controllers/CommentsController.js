import CommentModel from "../models/CommentModel";

export function list(req, res) {
  CommentModel.find({}).exec()
 .then(comments => {
   return res.json(comments);
 });
}
export function show(req, res) {
  CommentModel.find({id: req.params.id }).exec()
 .then(comment => {
   return res.json(comment);
 });
  // let commentId = req.params.id;
  // let singleComment = comments.find(function (comment) {
  //   return commentId == comment._id;
  // });
  // return res.json(singleComment);
}
export function create(req, res) {
  const comment = new CommentModel({
   body: req.body.body,
 });
 comment.save()
 .then(comment => {
   return res.json(comment);
 });
}
export function update(req, res) {
  return res.json({ theId: req.params.id });
}
export function remove(req, res) {
  return res.json({});
}
