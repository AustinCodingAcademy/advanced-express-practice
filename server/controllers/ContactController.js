import ContactModel from "../models/ContactModel";

export const list = (req, res) => {
    ContactModel.find({}).exec()
    .then( list => res.json(list) );
};

export const show = (req, res) => {
    ContactModel.findById(req.params.id).exec()
    .then( contact => res.json(contact) );
};

export const create = (req, res) => {
    ContactModel.find({}).exec()
    .then( list => {
        const id = (list.length + 1);
        const contact = new ContactModel({
            _id: id,
            name: req.body.name,
            occupation: req.body.occupation,
            avatar: req.body.avatar
        });
        contact.save()
        .then( con => res.json(con) )
    });
};

export const update = (req, res) => {
    return res.send('WAT');
};

export const remove = (req, res) => {
    return res.send('WAT');
};
