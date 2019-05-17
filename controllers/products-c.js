//let products = require('../products');
let ProductModel = require('../models/ProductModel')
let ObjectID = require('mongoose').ObjectID

exports.list = ( req, res )=> {
    // return res.json(products);
    ProductModel.find((err, products)=>{
        if(err) return console.log(err)
        return res.json(products)
    })
}

exports.show = ( req, res )=> {
    // let id = Number(req.params.id);
    // let product = products.find( element => element._id === id );
    // return res.json(product);
    let productId =  ObjectId(request.params.id)
    ProductModel.findById(productId, function(err, product) {
        if (err) return console.error(err)
        return response.json(product)
    })

}

exports.create =( req, res)=> {
    let addProduct = req.body;
    // addProduct._id = products[products.length - 1]._id + 1;
    // products.push(addProduct);
    // return res.json(products);
    let product = new Product( { name: body.name, description: body.description} )
    product.save(function (err, comment) {
        if (err) return console.error(err);
    });
    return response.json(addProduct);
}