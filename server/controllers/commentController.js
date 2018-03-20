import commentModel from "../models/comments";

export const list = (req, res) => {
    commentModel.find({}).exec()
    .then( list => res.json(list) );
}; 

export const show = (req, res) => {
    commentModel.findById(req.params.id).exec()
    .then( comment => res.json(comment) );
};

export const create = (req, res) => {
    commentModel.find({}).exec()
    .then( list => {
        const id = ( list.length + 1 );
        const comment = new commentModel({
            _id: id,
            body: req.body.body
        });
        comment.save()
    .then( comm => res.json(comm) );
    })
};

export const update = (req, res) => {
    res.send('nope');
};

export const remove = (req, res) => {
    res.send('nope');
};