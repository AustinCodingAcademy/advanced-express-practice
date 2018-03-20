import productModel from "../models/products";

export const list = (req, res) => {
    productModel.find({}).exec()
    .then( list => res.json(list) );
}; 

export const show = (req, res) => {
    productModel.findById(req.params.id).exec()
    .then( prod => res.json(prod) );
};

export const create = (req, res) => {
    productModel.find({}).exec()
    .then( list => {
        const id = (list.length + 1);
        const product = new productModel({
            _id: id,
            name: req.body.name,
            description: req.body.description
        });
        product.save()
        .then( prod => res.json(prod) );
    });
};

export const update = (req, res) => {
    return res.send('nah');
};

export const remove = (req, res) => {
    return res.send('nah');
};