import comments from "../comments";

export function list(request, response) {
  return response.json(comments);
}

export function show(request, response) {
  let commentId = request.params.id;

  function findComment(comment) {
    return comment.id === commentId;
  }

  return response.json(comments.find(findComment));
}

export function create(request, response) {
  comments.push(request.body);
  return response.json(comments);
}
