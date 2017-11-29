import products from "../products";
import ProductModel from "../models/ProductModel";

export function list(request, response) {
  ProductModel.find({}).exec().then(products => {
    return response.json(products);
  });
}

export function show(request, response) {
  ProductModel.findById(request.params.id).exec().then(product => {
    return response.json(product);
  });
}

export function create(request, response) {
  const product = new ProductModel({
    name: request.body.name,
    description: request.body.description
  });
  product.save().then(product => {
    return response.json(product);
  });
}
