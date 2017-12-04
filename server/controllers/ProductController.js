import products from "./products";
import Product from "./models/Product";

app.get("/products", (request, response) => {
Product.find({}).exec()
.then(products => {
  return response.json(products);
});
});

export function list(request, response) {
 return response.json(products);
}
export function show(request, response) {
 return response.json({theId: request.params.id});
}
export function create(request, response) {
  products.push(request.body);
 return response.json({});
}
export function update(request, response) {
 return response.json({theId: request.params.id});
}
export function remove(request, response) {
 return response.json({});
}
