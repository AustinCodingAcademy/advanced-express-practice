import products from "../products";
import Product from "../models/products";

export const list = (request, response) => {
  Product.find({}).exec()
  .then(products => {
    return response.json(products);
  });
}
export const show = (request, response) => {
  Product.findById(request.params.id).exec()
  .then(product => {
    return response.json(product);
  });
}
export const create = (request, response) => {
  const product = new Product(request.body);
  product.save()
  .then(p => {
    return response.json(p);
  });
}
