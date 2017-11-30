import products from "../products.js";
import Product from "../models/products";

// function to get the list of products from the database
export const list = (request, response) => {
  Product.find({}).exec()
  .then(products => {
    return response.json(products);
  });

  // return response.json(products);
}

// function to display details for one product
export const show = (request, response) => {

  Product.findById(request.params.id).exec()
  .then(product => {
    return response.json(product);
  });

  // return response.json(products.find(product => product._id == request.params.id));
}

// function to save a product in the database
export const create = (request, response) => {

  const product = new Product(request.body);
  product.save()
  .then(p => {
    return response.json(p);
  });

  // return response.json(products.push(request.body));
}
