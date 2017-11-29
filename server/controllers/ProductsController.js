import products from "../products";


export function list(request, response) {
    return response.json(products);
}

export function show(request, response) {
    return response.json(products.find(u => u._id == request.params.id) || {});
}

export function create(request, response) {
    products.push(request.body);
    return response.send("product saved");
}

export function update(request, response) {
    return response.json(products[0].name = request.params.id);
}
export function remove(request, response) {
    return response.json(products.pop());
}