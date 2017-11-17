import comments from "../comments";
/*
GET -> list
GET /:id -> show
POST -> create
PUT /:id -> update
DELETE /:id -> remove
*/
export function list(request, response) {
 return response.json(comments);
}
export function show(request, response) {
 return response.json({theId: request.params.id});
}
export function create(request, response) {
  comments.push(request.body);
 return response.json(comments);
}
export function update(request, response) {
 return response.json({theId: request.params.id});
}
export function remove(request, response) {
 return response.json(comments);
}
