let products = require('../models/ProductModel');
//get request

exports.list =  function list(request, response) {
    return response.json(products);
   }
   exports.show = function show(request, response) {
    let product = products.find(c=> c._id == request.params.id);
    return response.json(product);
   }

   exports.create =  function create(request, response) {
    const temp = request.body
    temp["_id"] = products.length +1;
    products.push(temp);
    return response.json(temp);
   }

