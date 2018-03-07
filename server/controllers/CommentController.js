import comments from "../comments.js"

export function list(request, response) {
    console.log("test");
 return response.json(comments);
}
export function show(request, response) {
 return response.json(comments.find((c)=>c._id==request.params.id));
}
export function create(request, response) {
  let newComment = request.body;
  comments.push(newComment);
  response.json(newComment);
}
// export function update(request, response) {
//  return response.json({theId: request.params.id});
// }
// export function remove(request, response) {
//  return response.json({});
// }
