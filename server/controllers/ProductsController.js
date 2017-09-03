// import products from "../products";
import ProductModel from "../models/ProductModel";


export function list(request, response) {
 // return response.json(products);
 let promise = ProductModel.find({}).exec();
 promise.then(products => {
   return response.json(products);
 })
}

export function show(request, response) {
 // return response.json({theId: request.params.id});
 Product.findOne({id: request.params.id}).exec()
 .then(foundProduct => {
   return response.json(foundProduct);
 })
}

export function create(request, response) {
 //  products.push(request.body);
 // return response.json({
 //   name: request.body.name,
 //   description: request.body.description
 // });
  const product = new ProductModel({
   name: request.body.name,
   description: request.body.description
  });
  product.save()
  .then(product => {
   return response.json(product);
  });
}

export function update(request, response) {
 return response.json({theId: request.params.id});
}
export function remove(request, response) {
 return response.json({});
}
