const products = require("../products");

function list(request, response) {
    return response.json(products);
}

function show(request, response) {
    let getProduct = products.find(p => {
            return String(p._id) === request.params.id;
        });
      
    return response.json(getProduct);
}

function create(request, response) {
    products.push(request.body);
    return response.json(products);
}

module.exports = {
    list,
    show,
    create
}

/*export function update(request, response) {
    return response.json({theId: request.params.id});
}

export function remove(request, response) {
    return response.json({});
}*/