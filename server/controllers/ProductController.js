import ProductModel from '../models/ProductModel';

export const list = (request, response) => {
  ProductModel.find({}).exec()
  .then(products => {
    return response.json(products);
  });
};
export const show = (request, response) => {
  ProductModel.findById(request.params.id).exec()
  .then(prod => {
    return response.json(prod);
  });
};
export const create = (request, response) => {
  const product = new ProductModel({
    name: request.body.name,
    description: request.body.description
  });
  product.save()
  .then(p => {
    return response.json(p);
  });
};
export const update = (request, response) => {
  return response.json({theId: request.params.id});
};
export const remove = (request, response) => {
  return response.json({});
};
