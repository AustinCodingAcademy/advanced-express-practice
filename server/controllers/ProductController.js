//const products=require("../products");
const ProductModel=require("../models/ProductModel");
//let productCount=products.length;

module.exports.list=(req, res)=>{
    ProductModel.find().exec().then((product)=>{
        return res.json(product)
    })
}
// module.exports.list=(req,res)=>{
//     return res.json(products)
// }

module.exports.show= (req, res)=>{
    ProductModel.findById(req.params.id).exec().then((product)=>{
        return res.json(product)
    })   
}

module.exports.create=(req,res)=>{
    const p=new ProductModel({
        name:req.body.name,
        description:req.body.description
    });
    p.save().then(savedProduct=>{
        return res.json(savedProduct)
    })
    // let newProduct=req.body;
    // products.push(newProduct);
    // productCount++;
    // newProduct._id =productCount;
    // return res.json(newProduct)
}

module.exports.update= function update(req,res) {
    return res.json({theId: req.params.id});
}

module.exports.remove= function remove(req, res){
    return res.json({});
}