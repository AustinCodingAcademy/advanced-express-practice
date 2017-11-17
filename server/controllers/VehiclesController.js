import vehicles from "../vehicles";
/*
GET -> list
GET /:id -> show
POST -> create
PUT /:id -> update
DELETE /:id -> remove
*/
export function list(request, response) {
 return response.json(vehicles);
}
export function show(request, response) {
 return response.json({theId: request.params.id});
}
export function create(request, response) {
  vehicles.push(request.body);s
 return response.json(vehicles);
}
export function update(request, response) {
 return response.json({theId: request.params.id});
}
export function remove(request, response) {
 return response.json(vehicles);
}
