let ProductModel = require("../models/ProductModel");

module.exports.list =  function list(request, response) {
    ProductModel.find({}).exec().then(products => {
        return response.send(products);
    }); 
}

module.exports.show =  function show(request, response) {
    ProductModel.findById(request.params.id).exec().then(product => {
        return response.json(product);
    });
}
   
module.exports.create =  function create(req,res,next){
    const newproduct= new ProductModel(req.body);
    newproduct.save();
    return response.send(products);
}
   
module.exports.update =  function update(req,res,next){
    ProductModel.findById(request.params.id).exec().then(product => {
        product.make = "Tom" ;
        product.model = "Sawyer";
        product.year = "Painter";
        return product.save();
    })
    .then(product => {
        return res.json(product[index]);
    });
}
   
module.exports.remove =  function remove(req,res,next){
    ProductModel.findById(request.params.id).exec().then(product => {
        product[index].active = false;
        return product.save();
    })
    .then(product => {
        return res.json(product[index]);
    });
}