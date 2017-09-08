import ContactModel from "../models/ContactModel";

export function list(request, response) {
  ContactModel.find({}).exec()
  .then(contacts => {
    return response.json(contacts);
  });
}
export function show(request, response) {
  let someContact = request.params.id;
  let oneContact = contacts.find(function(contact){
    return someContact == contacts._id;
    response.json(someContact);
  })
}
export function create(request, response) {
  contacts.push(request.body)
  return response.json({
    name:request.body.name,
    occupation:request.body.occupation,
    avatar:request.body.avatar
  });
}
export function update(request, response) {
  return response.json({theId: request.params.id});
}
export function remove(request, response) {
  return response.json({});
}
