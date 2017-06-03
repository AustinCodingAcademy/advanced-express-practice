import ContactModel from "../models/contact";

export function list(req, res) {
    ContactModel.find({})
    .exec()
    .then((contacts) => {
        return res.json(contacts);
    });
}

export function show(req, res) {
    ContactModel.findById(req.params.id)
    .exec()
    .then((contact) => {
        return res.json(contact);
    })
}

export function create(req, res) {
    const contact = new ContactModel({
        body: req.body.body
    });
    contact.save()
    .then((c) => {
        return res.json(c);
    });
}