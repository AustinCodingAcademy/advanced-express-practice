let products = require("../products");

module.exports.list =  function list(request, response) {
    return response.send(products);
}

module.exports.show =  function show(request, response) {
    const product = products.find(products => products._id == request.params.id);
    response.json(product);
    return response.json({id: request.params.id});
}
   
module.exports.create =  function create(req,res,next){
    products.push(req.body);
    products[products.length-1]._id = products[products.length-2]._id + 1;
    return res.json(products[products.length-1]);
}
   
module.exports.update =  function update(req,res,next){
    const index = products.findIndex(products => products._id == req.params.id);
    products[index].name = "Zack"
    res.json(products);
    return res.json(products[index]);
}
   
module.exports.remove =  function remove(req,res,next){
    const index = products.findIndex(products => products._id == req.params.id);
    products[index].active = false;
    return res.json("deleted");
}