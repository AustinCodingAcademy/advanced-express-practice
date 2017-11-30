import comments from "../comments.js";
import Comment from "../models/comments";

// function to get the list of comments.
export const list = (request, response) => {
  Comment.find({}).exec()
  .then(comments => {
    return response.json(comments);
  });
}

// function to show details of one comment.
export const show = (request, response) => {

  Comment.findById(request.params.id).exec()
  .then(comment => {
    return response.json(comment);
  });

  // return response.json(comments.find(comment => comment._id == request.params.id));
}

// function to create a comment object.
export const create = (request, response) => {

  const comment = new Comment(request.body);
  comment.save()
  .then(c => {
    return response.json(c);
  });
  // return response.json(comments.push(request.body));
}
