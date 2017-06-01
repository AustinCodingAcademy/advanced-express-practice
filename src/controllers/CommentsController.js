// import comments from "../comments";
import CommentsModel from "../models/CommentsModel";

// export function list(req,res) {
//   return res.json(comments);
// }
//

export function list(req,res) {
  CommentsModel.find({}).exec()
  .then(comments => {
    return res.json(comments);
  });
}
// export function show(req,res) {
//   const oneComment = comments.find(u => u._id === req.params.id);
//   return res.json(oneComment);
// }
//

export function create(req,res) {
  const comment = new CommentsModel({
    body: req.body.body
  });
  comment.save()
  .then(c => {
    return res.json(c);
  });
}
// export function create(req,res) {
//   comments.push(req.body);
//   return res.json(req.body);
// }

export function show(req,res) {
  CommentsModel.findById(req.params.id).exec()
  .then(comment => {
    return res.json(comment);
  });
}
