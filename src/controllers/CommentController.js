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
  const { text } = req.body;
  const comment = new CommentModel({
    text
  });
  comment.save()
    .then(newComment => {
      return res.json(newComment);
    });
}
