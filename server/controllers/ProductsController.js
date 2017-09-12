import ProductModel from "../models/ProductModel";

export function list(request, response) {
  ProductModel.find({}).exec()
  .then(products => response.json(products))
}
export function show(request, response) {
  let someProduct = request.params.id;
  let oneProduct = products.find(function(product){
  return someProduct == products._id;
  response.json(someProduct);
});
}
export function create(request, response) {
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
