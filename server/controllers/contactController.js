import contacts from "../models/contacts";

export const list = (req, res) => {
    return res.json(contacts);
}; 

export const show = (req, res) => {
    let contact = contacts.find(e => e._id == req.params.id);
    return res.json(contact);
};

export const create = (req, res) => {
    let id = (contacts.length + 1);
    let contact = {
        _id: id,
        name: req.body.name,
        occupation: req.body.occupation,
        avatar: req.body.avatar
    }
    contacts.push(contact);
    return res.json({});
};

export const update = (req, res) => {
    return res.json({theid: req.params.id});
};

export const remove = (req, res) => {
    return res.json({});
};