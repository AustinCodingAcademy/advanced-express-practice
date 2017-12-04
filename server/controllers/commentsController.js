import comments from "../comments";

export function list(request, response) {
  response.json(comments);
}
export function show(request, response) {
  let id = request.params.id;
  console.log(id);
  let comment = comments.find(comment => comment._id == id) || {};
  return response.json(comment);
}

export function create(request, response) {
  comments.push(request.body);
}


export function update(request, response) {
  return response.json(comments[0].name = request.params.id);
}
export function remove(request, response) {
  return response.json(comments.pop());
}
