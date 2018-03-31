import contacts from "../contacts";

export function list(request, response) {
  return response.json(contacts);
}
export function show(request, response) {
  let contact = contacts.find(function(item){
    return (item._id == request.params.id);
  });
  return response.json(contact);
}
export function create(request, response) {
  contacts.push(request.body);
  return response.send("contact saved");
}