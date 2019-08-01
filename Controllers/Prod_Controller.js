//const products = require("../products");
let Product = require('../Server/models/Product_model');

//get all products
exports.list =  function list(req, res) {
   Product.find((e,p)=>{
    return res.json(p);
   });
   }
//get one comment by id   
   exports.show = function show(req, res) {
    Products.findById(req.params.id,(err,p)=>{
       return res.json(p);
    });
   }
   exports.create =  function create(req, res) {
    let newProduct = new Product(req.body);
    newProduct.save(()=>{
       return res.json(newProduct);
    });
   }