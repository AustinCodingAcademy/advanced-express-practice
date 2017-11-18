import vehicles from "../vehicles.js";

export const list = (request, response) => {
  return response.json(vehicles);
}

export const show = (request, response) => {
  return response.json(vehicles.find(vehicle => vehicle._id == request.params.id));
}

export const create = (request, response) => {
  return response.json(vehicles.push(request.body));
}
