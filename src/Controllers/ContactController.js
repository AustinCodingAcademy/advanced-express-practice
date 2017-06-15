import contacts from "../contacts";
import ContactModel from "../Models/ContactModel"

export function list(req, res){
  ContactModel.find({}).exec()
  .then(contacts => {
    return res.json(contacts);
  });
}

export function show(request, response){
  ContactModel.findById(request.params.id).exec()
  .then(contact => {
    return response.json(contact);
  });
}

export function create(req, res){
  console.log(req);

  const contact = new ContactModel({
    name: req.body.name,
    occupation: req.body.occupation,
    avatar: req.body.avatar

  });
  contact.save()
  .then(contact =>{
    return res.json(contact);
  });
}
