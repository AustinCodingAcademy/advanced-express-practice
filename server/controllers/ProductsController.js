//import products from "../products";
import ProductModel from "../models/Product";

export function list(request, response) {
    //For Array
    //return response.json(comments);

    //For DB
    ProductModel.find({}).exec()
    .then(products => {
        return response.json(products);
    });
}
export function show(request, response) {
    //For Array
    //return response.json(comments.find(comment => comment._id == request.params.id) || {});
    
    //For DB
    ProductModel.findById(request.params.id).exec()
    .then(product => {
      return response.json(product);
    });
}
export function create(request, response) {
    //For Array
    //    comments.push(request.body);
    //return response.json({});
    
    //For DB
    const newProduct = new ProductModel({
        name: request.body.name,
        description: request.body.description
    });
    newProduct.save()
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