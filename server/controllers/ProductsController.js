let products = require('../products');
//get request

exports.list =  function list(request, response) {
    return response.json(products);
   }
   exports.show = function show(request, response) {
    return response.json(products[request.params.id - 1]);
   }
   exports.create =  function create(request, response) {
    const temp = request.body
    temp["_id"] = products.length +1;
    products.push(temp);
    return response.json(temp);
   }

