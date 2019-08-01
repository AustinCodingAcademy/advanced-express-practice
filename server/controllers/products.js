let Product = require("../models/productModel")

exports.list =  function list(req, res) {
   Product.find((err,p)=>{
       return res.json(p);
   });
}
exports.show = function show(req, res) {
   Product.findById(req.params.id, (err,p)=>{
       return res.json(p);
   });
}
exports.create =  function create(req, res) {
    const newProduct = new Product({
        name: req.body.name,
        description: req.body.description
    })
    newProduct.save().then(savedProduct=>{
        console.log(savedProduct)
    })    
}