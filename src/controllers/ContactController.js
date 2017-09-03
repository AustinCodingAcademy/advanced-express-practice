import ContactModel from "../models/ContactModel";

export function list(req, res) {
  ContactModel.find({}).exec()
  .then(contacts => res.json(contacts))
  .catch(err => console.log(err));
}

export function show(req, res) {return res.json({id: req.params.id})};

export function  create(req, res) {
  const contact = new ContactModel({
    firstName: req.body.firstName,
    lastName: req.body.lastName
  });
  contact.save()
  .then(user => res.json(user))
  .catch(err => console.log(err));
}

export function  update(req, res) {return res.json({id: req.params.id})};

export function  remove(req, res) {return res.json({})};

