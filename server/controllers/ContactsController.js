import contacts from "../contacts";
/*
GET -> list
GET /:id -> show
POST -> create
PUT /:id -> update
DELETE /:id -> remove
*/
export function list(request, response) {
 return response.json(contacts);
}

export function show(request, response) {
 return response.json({theId: request.params.id});
}

export function create(request, response) {
  contacts.push(request.body);
 response.json(contacts);
}
export function update(request, response) {
 return response.json({theId: request.params.id});
}

export function remove(request, response) {
 return response.json({});
}
