
 import comments from "../comments";
 
 
 export function list(request, response) {
     return response.json(comments);
 }
 
 export function show(request, response) {
     return response.json(comments.find(u => u._id == request.params.id) || {});
 }
 
 export function create(request, response) {
     comments.push(request.body);
     return response.send("comment saved");
 }
 
 export function update(request, response) {
     return response.json(comments[0].name = request.params.id);
 }
 export function remove(request, response) {
     return response.json(comments.pop());
 }