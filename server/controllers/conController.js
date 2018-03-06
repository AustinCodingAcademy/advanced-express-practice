import contacts from "../data/contacts"; 

export const list = (req, res) => {
    return res.json(contacts);
}

export const show = (req, res) => {
    return res.json({theId: req.params.id});
}

export const create = (req, res) => {
    return res.json({});
}

export const update = (req, res) => {
    return res.json({theId: req.params.id});
}

export const remove = (req, res) => {
    return res.json({});
}