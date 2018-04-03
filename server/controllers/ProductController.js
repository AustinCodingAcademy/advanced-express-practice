import ProductModel from "../models/ProductModel";

export const list = (req, res) => {
    ProductModel.find({}).exec()
    .then( list => res.json(list) );
};

export const show = (req, res) => {
    ProductModel.findById(req.params.id).exec()
    .then( prod => res.json(prod) );
};

export const create = (req, res) => {
    ProductModel.find({}).exec()
    .then( list => {
        const id = (list.length + 1);
        const product = new ProductModel({
            _id: id,
            name: req.body.name,
            description: req.body.description
        });
        product.save()
        .then( prod => res.json(prod) );
    });
};

export const update = (req, res) => {
    return res.send('WAT');
};

export const remove = (req, res) => {
    return res.send('WAT');
};
