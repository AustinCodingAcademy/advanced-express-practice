import Product from "../models/Product";


 export function list(request, response) {
   Product.find({}).exec()
   .then(products => {
     return response.json(products);
   });
 }

 export function show(request, response) {
   Product.findById(request.params.id).exec()
   .then(products => {
     return response.json(products);
   });
 }

 export function create(request, response) {
   const product = new Product({
       name: request.body.name,
       description: request.body.description
   });
   product.save()
   .then(products => {
       return response.json(products);
   });
 }

 export function update(request, response) {
      return response.json(Product[0].name = request.params.id);
 }
 export function remove(request, response) {
     return response.json(Product.pop());
 }
