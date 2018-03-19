import products from "../models/products";

export const list = (req, res) => {
    return res.json(products);
}; 

export const show = (req, res) => {
    let product = products.find(e => e._id == req.params.id);
    return res.json(product);
};

export const create = (req, res) => {
    let id = (products.length + 1);
    let product = {
        _id: id, 
        name: req.body.name,
        description: req.body.description
    }
    console.log(product);
    products.push(product);
    return res.json({});
};

export const update = (req, res) => {
    return res.json({theid: req.params.id});
};

export const remove = (req, res) => {
    return res.json({});
};