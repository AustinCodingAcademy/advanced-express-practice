import vehicles from "../vehicles";


export function list(request, response) {
    return response.json([vehicles]);
   }


export function show(request, response) {
    let id = request.params.id;
    let vehicleID = vehicles.find((vehicle) => {
      if(vehicle._id == id){
       return vehicle
      }
      else response.send("There is no such vehicle")
    })
    return response.json(vehicleID);
   }


export function create(request, response) {
    return vehicles.push(request.body);
   }


export function update(request, response) {
    return response.json({theId: request.params.id});
   }
export function remove(request, response) {
    return response.json({});
   }