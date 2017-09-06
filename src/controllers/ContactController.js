import ContactModel from "../models/ContactModel";

export function list(req, res) {
  ContactModel.find({}).exec()
  .then(contacts => res.json(contacts))
  .catch(err => console.log(err));
}

export function show(req, res) {
  ContactModel.findById(req.params.id).exec()
  .then(contact => res.json({id: req.params.id}))
  .catch(err => console.log(err));
}

export function  create(req, res) {
  const {name, occupation, avatar} = req.body;
  const contact = new ContactModel({
    name,
    occupation,
    avatar
  });
  contact.save()
  .then(user => res.json(user))
  .catch(err => console.log(err));
}

export function  update(req, res) {return res.json({id: req.params.id})};

export function  remove(req, res) {return res.json({})};

