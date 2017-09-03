import products from "./products";
import ProductModel from "../models/ProductModel";


export function list(request, response) {
    ProductModel.find({}).exec()
        .then(products => {
            return response.json(products);
        });
}

export function show(request, response) {
    let productId = request.params.id;
    let singleProduct = products.find(function (product) {
        return productId === product._id;
    });
    return response.json(singleProduct);
}

export function create(request, response) {
    const product = new productModel({
        name: request.body.name,
        description: request.body.description
    });
    product.save()
        .then(product => {
            return response.json(product);
        });
}

export function update(request, response) {
    return response.json({ theId: request.params.id });
}
export function remove(request, response) {
    return response.json({});
}