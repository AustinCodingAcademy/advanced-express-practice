import ProductModel from "../models/ProductModel";

export function list(request, response) {
  ProductModel.find({}).exec()
 .then(products => {
   return response.json(products);
 });
}

export function create(request, response) {
  const product = new ProductModel({
    name: request.body.name,
    description: request.body.description
  });
  product.save()
  .then(pro => {
    return response.json(pro);
  });
}

export function show(request, response) {
  ProductModel.findById(request.params.id).exec()
  .then(product => {
    return response.json(product);
  });
}

export function update(request, response) {
  ProductModel.findById(request.params.id).exec()
    .then(product => {
      product.name = request.body.name || product.name;
      product.description = request.body.description || product.description;
      return user.save();
    })
    .then(product => {
      return response.json(product);
    });
}

export function remove(request, response) {
 return response.json({});
}

/*export function show(request, response) {
  let id = request.params.productID; //set id equal to the request in the url
  let product = products.find((p)=>{
    if (p._id==id){ //double equals to compare a number and a string: 1 and "1"
      //console.log("Inside if statement: true")
      return true;
    }else{
      return false;
    }
  })
  return response.json(product);
}*/
