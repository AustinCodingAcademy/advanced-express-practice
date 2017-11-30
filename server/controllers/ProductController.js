import products from "../products";
import ProductModel from "../models/ProductModel";

export function list(request, response) {
  ProductModel.find({})
    .exec()
    .then(products => {
      return response.json(products);
    });
}

export function show(request, response) {
  ProductModel.findById(request.params.id)
    .exec()
    .then(product => {
      return response.json(product);
    });
}

export function create(request, response) {
  const product = new ProductModel(request.body);
  product.save().then(product => response.json(product));
}

export function update(request, response) {
  return response.json((products[0].name = request.params.id));
}
export function remove(request, response) {
  return response.json(products.pop());
}
