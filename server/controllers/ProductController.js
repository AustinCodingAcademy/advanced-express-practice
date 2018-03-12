import products from "../products";

export const list = (request, response) => {
  return response.json(products);
};
export const show = (request, response) => {
  return response.json({theId: request.params.id});
};
export const create = (request, response) => {
  return response.json({});
};
export const update = (request, response) => {
  return response.json({theId: request.params.id});
};
export const remove = (request, response) => {
  return response.json({});
};
