// GET -> list
// GET /:id -> show
// POST -> create
//
import comments from "../contacts";

export function list(req,res) {
  return res.json (comments);
}

export function show(req,res) {
  const comment = comments.find(u=>u._id == req.params.id);
  return response.json(comment);
}

export function create(req,res) {
  comments.push(req.body);
  return res.json (req.body);
}
