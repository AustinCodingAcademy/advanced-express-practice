import products from "../products";

export function list(request, response) {
    return response.json([products]);
   }


export function show(request, response) {
    let id = request.params.id;
    let productID = products.find((product) => {
      if(product._id == id){
       return product
      }
      else response.send("There is no such product")
    })
    return response.json(productID);
   }


export function create(request, response) {
    return products.push(request.body);
   }


export function update(request, response) {
    return response.json({theId: request.params.id});
   }


export function remove(request, response) {
    return response.json({});
   }