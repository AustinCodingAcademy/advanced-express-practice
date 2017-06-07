import comments from "../comments";
import CommentModel from "../models/CommentModel";

export function list(req, res) {
  CommentModel.find({}).exec()
  .then(comments => {
   return res.json(comments);
 });
}

export function show(req, res) {
  CommentModel.findById(req.params.id).exec()
  .then(comment => {
   return res.json(comment);
 });
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