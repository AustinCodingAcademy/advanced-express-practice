
import CommentModel from "../models/CommentModel";

export function list(req, res) {
  CommentModel.find({}).exec()
 .then(comments => {
   return res.json(comments);
 });
}

export function create(req, res) {
  const comment = new CommentModel({
    body: req.body.body
  });
  comment.save()
   .then(com => {
     return res.json(com);
   });
}

export function show(req, res) {
  CommentModel.findById(req.params.id).exec()
   .then(comment => {
     return res.json(comment);
   });
}
