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
  const commentId = request.params.id;
  const thisComment = comments.find(comm => comm.id == commentId) || {};
  response.json(thisComment);
}

export function create(request, response) {
  comments.push(request.body);
 return response.json(comments);
}

// FUNCTIONS BELOW NOT UPDATED
export function update(request, response) {
 return response.json({theId: request.params.id});
}

export function remove(request, response) {
 return response.json(comments);
}

// Alternate 'show' functions
/*
export function show(request, response) {
 return response.json({theId: request.params.id});
}

export function show(request, response) {
  const commentId = request.params.id;
 // use this id to get from a database
  comments.findById(commentId);
}

export function show(request, response) {
  const commentId = request.params.id;
 // use this id to get from a database
  comments.findById(commentId);
  const thisComment = comments.findById(commentId) || {};
  return response.json(thisComment);
}

*/
