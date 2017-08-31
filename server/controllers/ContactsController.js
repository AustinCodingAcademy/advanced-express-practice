// import contacts from "../contacts";
import ContactModel from "../models/ContactModel";


export function list(request, response) {
  let promise = ContactModel.find({}).exec();
  promise.then(contacts => {
    return response.json(contacts);
  })
}
export function show(request, response) {
 return response.json({theId: request.params.id});
}
export function create(request, response) {
 //  contacts.push(request.body);
 // return response.json({
 //   name: request.body.name,
 //   occupation: request.body.occupation,
 //   avatar: request.body.avatar
 // });
 const contact = new ContactModel({
   name: request.body.firstName,
   occupation: request.body.occupation,
   avatar: request.body.avatar,
 });
  contact.save()
  .then(user => {
    return response.json(user);
  });
}

export function update(request, response) {
 return response.json({theId: request.params.id});
}
export function remove(request, response) {
 return response.json({});
}
