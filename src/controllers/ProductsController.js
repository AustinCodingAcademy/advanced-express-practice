
import ProductModel from "../models/ProductModel";

export function list(req, res) {
  ProductModel.find({}).exec()
 .then(products => {
   return res.json(products);
 });
}

export function create(req, res) {
  const product = new ProductModel({
    name: req.body.name,
    description: req.body.description
  });
  product.save()
   .then(prod => {
     return res.json(prod);
   });
}

export function show(req, res) {
  ProductModel.findById(req.params.id).exec()
   .then(product => {
     return res.json(product);
   });
}
