import comments from "../models/comments";

export const list = (req, res) => {
    return res.json(comments);
}; 

export const show = (req, res) => {
    let comment = comments.find(e => e._id == req.params.id);
    return res.json(comment);
};

export const create = (req, res) => {
    let id = (comments.length + 1);
    let comment = {_id: id, body: req.body.body, postId: 1};
    comments.push(comment);
    return res.json(comments);
};

export const update = (req, res) => {
    return res.json({theid: req.params.id});
};

export const remove = (req, res) => {
    return res.json({});
};