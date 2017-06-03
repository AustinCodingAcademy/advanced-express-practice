import ProductModel from "../models/product";

export function list(req, res) {
    ProductModel.find({})
    .exec()
    .then((products) => {
        return res.json(products);
    });
}

export function show(req, res) {
    ProductModel.findById(req.params.id)
    .exec()
    .then((product) => {
        return res.json(product);
    })
}

export function create(req, res) {
    const product = new ProductModel({
        body: req.body.body
    });
    product.save()
    .then((c) => {
        return res.json(c);
    });
}