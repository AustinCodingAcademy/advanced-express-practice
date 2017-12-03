import comments from "../comments";
/*
GET -> list
GET /:id -> show
POST -> create
PUT /:id -> update
DELETE /:id -> remove
*/
export function listComment(request, response) {
  return response.json(comments);
}

/*
export function showComment(request, response) {
  const commentId = request.params.id;
  const thisComment = comments.find(comm => comm.id == commentId) || {};
  response.json(thisComment);
}
*/

export function showComment(request, response) {
  const commentId = comments.find(comm => {
    return String(comm._id) === request.params.id;
  });

  return response.json(commentId);
}

export function createComment(request, response) {
  comments.push(request.body);
  // alert("Success! Your new comment was saved.")
  return response.json(comments);
}

// FUNCTIONS BELOW NOT UPDATED
export function updateComment(request, response) {
  return response.json({theId: request.params.id});
}

export function removeComment(request, response) {
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
