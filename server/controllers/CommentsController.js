import comments from "../comments";

export function list(request, response) {
  return response.json(comments);
}
export function show(request, response) {
  let comment = comments.find(function(item){
    return (item._id == request.params.id);
  });
  return response.json(comment);
}
export function create(request, response) {
  comments.push(request.body);
  return response.send("contact saved");
}