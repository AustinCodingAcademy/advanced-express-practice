import CommentModel from "../models/CommentModel";

export function list(req,res) {
  CommentModel.find({}).exec()
  .then(comments => res.json(comments))
  .catch(err => console.log(err));
}

export function show(req,res) {
  CommentModel.findById(req.params.id).exec()
  .then(comment => res.json(comment))
  .catch(err => console.log(err));
}

export function create(req,res) {
  const {body} = req.body;
  const comment = new CommentModel({
    body
  });
  comment.save()
  .then(newComment => res.json(newComment))
  .catch(err => console.log(err));
}

export function update(req,res) {return res.json({id: req.params.id})}

export function remove(req,res) {return res.json([])}
