const products = require("../products");

//get all products
exports.list =  function list(req, res) {
    return res.json(products);
   }
//get one comment by id   
   exports.show = function show(req, res) {
    let product = products.find(p=>p.id === req.params._id);
    res.json(product);
   }
   exports.create =  function create(req, res) {
    let newProduct = req.body;
    products.push(newProduct);
   }