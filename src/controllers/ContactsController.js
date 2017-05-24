// GET -> list
// GET /:id -> show
// POST -> create
//
import contacts from "../contacts";

export function list(req,res) {
  return res.json (contacts);
}

export function show(req,res) {
  const contact = contacts.find(u=>u._id == req.params.id);
  return response.json(contact);
}

export function create(req,res) {
  contacts.push(req.body);
  return res.json (req.body);
}
