let products = require('../products');

exports.list = ( req, res )=> {
    return res.json(products);
}

exports.show = ( req, res )=> {
    let id = Number(req.params.id);
    let product = products.find( element => element._id === id );
    return res.json(product);
}

exports.create =( req, res)=> {
    let addProduct = req.body;
    addProduct._id = products[products.length - 1]._id + 1;
    products.push(addProduct);
    return res.json(products);
}