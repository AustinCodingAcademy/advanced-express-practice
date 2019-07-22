let products = require("../products");

//get - returns all 
exports.list =  function list(request, response) {
    return response.json(products);
}
//get one product by id
   exports.show = function show(request, response) {
    let product = products.filter (p=>p._id == request.params.id);
    response.json(product);
}

//post
   exports.create =  function create(request, response) {
    let newProduct = request.body;
    products.push(newProduct);
    response.json(newProduct)
}

//put
   exports.update =  function update(request, response) {
    let product = products.find (p=>p._id == request.params.id);
    product.make = body.make;
    response.json(product);
}

//delete
   exports.remove =  function remove(request, response) {
    let product = products.find(i => i._id == request.params.productId);
    product.isActive = false;
    response.send("deleted");
}
   