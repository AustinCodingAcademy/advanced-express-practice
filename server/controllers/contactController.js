import contactModel from "../models/contacts";

export const list = (req, res) => {
    contactModel.find({}).exec()
    .then( list => res.json(list) );
}; 

export const show = (req, res) => {
    contactModel.findById(req.params.id).exec()
    .then( contact => res.json(contact) );
};

export const create = (req, res) => {
    contactModel.find({}).exec()
    .then( list => {
        const id = (list.length + 1);
        const contact = new contactModel({
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
    // Contact.findById(req.params.id).exec()
    // .then( user => {
    //     user.name = req.body.name || user.name;
    //     user.occupation = req.body.occupation || user.occupation;
    //     user.avatar = req.body.avatar || user.avatar;
    //     return user.save;
    // })
    // .then(contact => {
    //     return response.json(contact);
    // })
    return res.send('nope');
};

export const remove = (req, res) => {
    return res.send('nah');
};