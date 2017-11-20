import comments from "../comments";

export function list(request, response) {
  return response.json(comments);
}

export function show(request, response) {
  let commentId = request.params.id;

  return response.json(comments.find(c => c._id == commentId) || {});
}

export function create(request, response) {
  comments.push(request.body);
  return response.json(comments);
}
