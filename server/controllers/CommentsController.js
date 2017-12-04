// import comments from "../comments";

import Comment from "../models/Comment";

/*
GET -> list
GET /:id -> show
POST -> create
PUT /:id -> update
DELETE /:id -> remove
*/

// get everything from the db
// nothing in braces, so means find everything
// ref 900 - Database, pg 22
export function listComment(request, response) {
  Comment.find({}).exec()
  .then(comments => {
    return response.json(comments);
  });
}

// ref Mongoose Checklist, pg 11, How do we get one user/whatever?
export function showComment(request, response) {
  // mongodb knows to look for _id, standard
  Comment.findById(request.params.id).exec()
  .then(comm => {
    return response.json(comm);
  });
}

// THIS IS WHEN IT BROKE: ERROR http://localhost:3101/comments 500 (Internal Server Error)
    // --> fix was inconsistent naming Comment vs CommentModel
// ref Mongoose Checklist, pg 10, Save something to the database (insert, save)
export function createComment(request, response) {
  // we need to give Comment() an object will all the information
  // {body: "my comment"} = request.body
  const comment = new Comment(request.body);
  comment.save()
    .then(comm => {
      // returning the thing we just saved
      // a little redundant, but it now has it's db auto-created id
      // you don't need to return after saving, but standard/common practice
      return response.json(comm);
    });
}

// FUNCTIONS BELOW NOT UPDATED
/*
export function updateComment(request, response) {
  return response.json({theId: request.params.id});
}

export function removeComment(request, response) {
  return response.json(comments);
}
*/
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
