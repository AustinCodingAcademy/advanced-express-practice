import vehicles from "../vehicles"

export function list(request, response) {
 return response.json(vehicles);
}
export function show(request, response) {
  let id = request.params.vehicleID; //set id equal to the request in the url
  let vehicle = vehicles.find((v)=>{
    if (v._id==id){ //double equals to compare a number and a string: 1 and "1"
      //console.log("Inside if statement: true")
      return true;
    }else{
      return false;
    }
  })
  return response.json(vehicle);
}
export function create(request, response) {
  vehicles.push(request.body)
  return response.json(request.body);
}
export function update(request, response) {
 return response.json({vehicleID: request.params.vehicleID});
}
export function remove(request, response) {
 return response.json({});
}
