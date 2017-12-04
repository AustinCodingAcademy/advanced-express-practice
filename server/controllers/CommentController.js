import comments from "./comments";
import Comment from "./models/Comment";

app.get("/comments", (request, response) => {
Comment.find({}).exec()
.then(comments => {
  return response.json(comments);
});
});

export function list(request, response) {
 return response.json(comments);
}
export function show(request, response) {
 return response.json({theId: request.params.id});
}
export function create(request, response) {
  comments.push(request.body);
 return response.json({});
}
export function update(request, response) {
 return response.json({theId: request.params.id});
}
export function remove(request, response) {
 return response.json({});
}
