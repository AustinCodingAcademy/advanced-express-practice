// import products from "../products";
import ProductModel from "../models/ProductModel";


export function list(request, response) {
  ProductModel.find({}).exec()
  .then(products => {
    return response.json(products);
  });
}

export function show(request, response) {
  productModel.findById(request.params.id).exec()
  .then(product => {
    return response.json(product);
  });
}

export function create(request, response) {
  const product = new productModel({
    name: request.body.name,
    description: request.body.description,
  });
  product.save()
  .then(product => {
    return response.json(product);
  });
}


export function update(request, response) {
  productModel.findById(request.params.id).exec()
  .then(product => {
   product.name = request.body.name || product.name;
  product.description = request.body.description || product.description;
    return product.save();
  })
  .then(product => {
    return response.json(product);
  });
}

export function remove(request, response) {
  productModel.findByIdAndRemove(req.params.id)
  .then(res => {
    return response.json();
  });
}