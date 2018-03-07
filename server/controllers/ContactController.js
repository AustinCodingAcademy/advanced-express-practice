import contacts from "../contacts.js"

export function list(request, response) {
 return response.json(contacts);
}
export function show(request, response) {
 return response.json(contacts.find((c)=>c._id==request.params.id));
}
export function create(request, response) {
   let newContact = request.body
   contacts.push(newContact);
   response.json(newContact);
}
// export function update(request, response) {
//  return response.json({theId: request.params.id});
// }
// export function remove(request, response) {
//  return response.json({});
// }
