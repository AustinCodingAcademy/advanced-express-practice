import products from "../products"

export function list(request, response) {
 return response.json(products);
}
export function show(request, response) {
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
}
export function create(request, response) {
  products.push(request.body)
  return response.json(request.body);
}
export function update(request, response) {
 return response.json({productID: request.params.productID});
}
export function remove(request, response) {
 return response.json({});
}
