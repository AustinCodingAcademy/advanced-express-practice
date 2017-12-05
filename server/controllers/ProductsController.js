import ProductsModel from "../models/ProductsModel"

export function list(request, response) {
    ProductsModel.find({}).exec()
    .then(products => response.json(products))
};

export function show(request, response) {
  let id = request.params.id;
  ProductsModel.findById(id)
  .then(product => response.json(product))
};

export function create(request, response) {
  const product = new ProductsModel(request.body)
  product.save()
  .then(product => {
    return response.json(product)
  });
}


export function update(request, response) {
  return response.json(products[0].name = request.params.id);
}
export function remove(request, response) {
  return response.json(products.pop());
}