import ContactModel from "../models/ContactModel";


export function list(request, response) {
  ContactModel.find({}).exec()
  .then(contacts => {
    return response.json(contacts);
  });
}
export function show(request, response) {
  ContactModel.findById(request.params.id).exec()
   .then(contacts => {
     return response.json(contacts);
   });
 }



  // let someContact = request.params.id;
  // let oneContact = contacts.find(function(contact){
  //   return someContact == contacts._id;
  //   response.json(someContact);

export function create(request, response) {
  const contact = new ContactModel({
    name: request.body.name,
    occupation: request.body.occupation,
    avatar: request.body.avatar
  });
  contact.save()
  .then(contact => {
    return response.json(contacts);
  });
}

export function update(request, response) {
  ContactModel.findById(request.params.id).exec()
  .then(contact => {
    contact.name = request.body.name || contact.name;
    contact.occupation = request.body.occupation || contact.occupation;
    contact.avatar = request.body.avatar || contact.avatar;
    return contact.save();
  })
  .then(contact => {
    return response.json(contact);
  })
}


  // return response.json({theId: request.params.id});


export function remove(request, response) {
  return response.json({});
}
