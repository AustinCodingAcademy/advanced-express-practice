import ContactModel from "../models/ContactModel";

export function list(req, res) {
  ContactModel.find({}).exec()
    .then(contacts => {
      return res.json(contacts);
    });
}

export function show(req, res) {
  ContactModel.findById(req.params.id).exec()
    .then(contact => {
      return res.json(contact);
    });
}

export function create(req, res) {
  const { name, occupation, avatar } = req.body;
  const contact = new ContactModel({
    name,
    occupation,
    avatar
  });
  contact.save()
    .then(newContact => {
      return res.json(newContact);
    });
}
