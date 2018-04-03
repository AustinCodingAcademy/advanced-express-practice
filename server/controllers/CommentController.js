// import comments from "../comments.js";
import CommentModel from "../models/CommentModel.js";


export const list = (req, res) => {
  CommentModel.find({}).exec()
  .then( list => res.json(list) );
};

export const show = (req, res) => {
  CommentModel.findById(req.params.id).exec()
  .then( comment => res.json(comment) );
};

export const create = (req, res) => {
    CommentModel.find({}).exec()
    .then( list => {
        const id = ( list.length + 1 );
        const comment = new CommentModel({
            _id: id,
            body: req.body.body
        });
        comment.save()
    .then( comm => res.json(comm) );
    })
};

export const update = (req, res) => {
    res.send('WAT');
};

export const remove = (req, res) => {
    res.send('WAT');
};
