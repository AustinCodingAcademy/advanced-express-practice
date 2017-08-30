import comments from "../comments";

export function list(request, response) {
  return response.json(comments);
}

export function show(request, response) {
  const oneComment = comments.find(comment => {
    return comment.id === request.params.id;
  });
  return response.json(oneComment);
}

export function create(request, response) {
  comments.push(request.body);
  return response.json(comments);
}
