import comments from "../comments";

//GET => List
export function list(request, response) {
 return response.json(comments);
}

//GET/:id => Show
export function show(request, response) {
 return response.json({theId: request.params.id});
}

//POST => Create
export function create(request, response) {
 return response.json({});
}

//PUT/:id => Update
export function update(request, response) {
 return response.json({theId: request.params.id});
}

//DELETE/:id => Remove
export function remove(request, response) {
 return response.json({});
}
