// import contacts from "../contacts";
import ContactModel from "../models/ContactModel";


export function list(req,res) {
  ContactModel.find({}).exec()
  .then(contacts => {
    return res.json(contacts);
  });
  // return res.json(contacts);
}

export function create(request,response) {
  const contact = new ContactModel({
    // firstName: request.body.firstName,
    // lastName: request.body.lastName,
    name: request.body.name,
    occupation: request.body.occupation,
    avatar: request.body.avatar,
    // address: request.body.address,
    // phone: request.body.phone
  });
  contact.save()
  .then(c => {
    return response.json(c);
  });
}

// export function show(req,res) {
//   const oneContact = contacts.find(u => u._id === req.params.id);
//   return res.json(oneContact);
// }

export function show(request,response) {
  ContactModel.findById(request.params.id).exec()
  .then(contact => {
    return response.json(contact);
  });
}
