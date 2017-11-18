import products from "../products.js";

export const list = (request, response) => {
  return response.json(products);
}

export const show = (request, response) => {
  return response.json(products.find(product => product._id == request.params.id));
}

export const create = (request, response) => {
  return response.json(products.push(request.body));
}
