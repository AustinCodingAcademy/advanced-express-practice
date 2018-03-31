import products from "../products";

export function list(request, response) {
  return response.json(products);
}
export function show(request, response) {
  let product = products.find(function(item){
    return (item._id == request.params.id);
  });
  return response.json(product);
}
export function create(request, response) {
  products.push(request.body);
  return response.send("product saved");
}