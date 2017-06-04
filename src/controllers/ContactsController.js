
//common function names:
//GET -> list
//GET/:id -> show
//POST -> create
//PUT/:id -> update
//DELETE/:id -> remove

import contacts from "../contacts";
import ContactModel from "../models/ContactModel"

export function list(req, res){
  ContactModel.find({}).exec()
  .then(contacts => {
    return res.json(contacts);
  });
  // return res.json(contacts);
}

export function show(request, response){
  ContactModel.findById(request.params.id).exec()
  .then(contact => {
    return response.json(contact);
  });
  // const onecontact = contacts.find(u=>u._id == req.params.id);
  // return res.json(onecontact);
}

export function create(req, res){

  const contact = new ContactModel({
    name: req.body.name,
    occupation: req.body.occupation,
    avatar: req.body.avatar,

  });
  contact.save()
  .then(user =>{
    return res.json(user);
  });

  // the below is for localhost...
  // contacts.push(req.body);
  // return res.json(req.body);
}
