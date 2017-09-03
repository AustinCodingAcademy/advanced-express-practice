// import contacts from "../contacts";
import ContactModel from "../models/ContactModel";



export function list(request, response) {
  let promise = ContactModel.find({}).exec();
  promise.then(contacts => {
    return response.json(contacts);
  })
}

export function show(request, response) {
 // return response.json({theId: request.params.id});
 Contact.findOne({id: request.params.id}).exec()
 .then(foundUser => {
   return response.json(foundUser);
 })
}

export function create(request, response) {
 const contact = new ContactModel({
   name: request.body.name,
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
