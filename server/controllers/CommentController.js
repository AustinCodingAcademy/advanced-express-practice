import comments from '../comments';

export function list(request, response) {
  return response.json(comments);
}
export function show(request, response) {
  const contactId = comments.find(comment => comment._id === request.params.id);
  return response.json(contactId);
}
export function create(request, response) {
  comments.push(request.body);
  return response.json({});
}
export function update(request, response) {
  return response.json({ theId: request.params.id });
}
export function remove(request, response) {
  return response.json({});
}
