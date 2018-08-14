let products = require("./products");

export function list(request, response) {
    return res.json(products)
}
export function show(request, response) {
    let prodID = products.find((item) => { return item._id == req.params.id })
    return res.json(prodID)
}
export function create(request, response) {
    ids.pro++;
    let newProd = {
        _id: ids.pro,
        name: req.body.name,
        description: req.body.description,
    }
    products.push(newProd);
    return res.json(products);
}
export function update(request, response) {
    return response.json({theId: request.params.id});
}
export function remove(request, response) {
    return response.json({});
}
   