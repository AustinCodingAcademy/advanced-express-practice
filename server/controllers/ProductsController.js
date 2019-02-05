const products = require("../products");

exports.list =  function list(request, response) {
    return response.json(products);
   }
   exports.show = function show(request, response) {
    const viewProduct = products.find(p=>p._id == request.params.id);
    return response.json(viewProduct);   
   }
   exports.create =  function create(request, response) {
    console.log('creating stuff')
    const newProduct = request.body;
    products.push(newProduct);
    return response.json(newProduct);
   }
   exports.update =  function update(request, response) {
    return response.json({theId: request.params.id});
   }
   exports.remove =  function remove(request, response) {
    return response.json({});
   }