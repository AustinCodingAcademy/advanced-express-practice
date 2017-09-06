import ProductModel from "../models/ProductModel";

export function list(req,res) {
  ProductModel.find({}).exec()
  .then(products => res.json(products))
  .catch(err => console.log(err));
}

export function show(req,res) {
  ProductModel.findById(req.params.id).exec()
  .then(product => res.json(product))
  .catch(err => console.log(err));
}

export function create(req,res) {
  const {
    name,
    description,
    reviews,
    rating,
    imgUrl,
    price,
    category,
    reviews
  } = req.body;
  const product = new ProductModel({
    name,
    description,
    reviews,
    rating,
    imgUrl,
    price,
    category,
    reviews
  });
  product.save()
  .then(newProduct => res.json(newProduct))
  .catch(err => console.log(err));
}

export function update(req,res) {return res.json([])}

export function remove(req,res) {return res.json([])}

