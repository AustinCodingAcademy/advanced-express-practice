const products=require("../products");
let productCount=products.length;

module.exports.list=(req,res)=>{
    return res.json(products)
}

module.exports.show= (req, res)=>{
    let product= products.find((id)=>{
        return id._id == req.params.id
    })
    return res.json(product)
}

module.exports.create=(req,res)=>{
    let newProduct=req.body;
    products.push(newProduct);
    productCount++;
    newProduct._id =productCount;
    return res.json(newProduct)
}

module.exports.update= function update(req,res) {
    return res.json({theId: req.params.id});
}

module.exports.remove= function remove(req, res){
    return res.json({});
}