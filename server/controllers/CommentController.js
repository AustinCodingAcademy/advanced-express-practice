import comments from "../comments.js";

export const list = (request, response) => {
  return response.json(comments);
}

export const show = (request, response) => {
  return response.json(comments.find(comment => comment._id == request.params.id));
}

export const create = (request, response) => {
  return response.json(comments.push(request.body));
}
