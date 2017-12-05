import Vehicle from "../models/Vehicle";


export function list(request, response) {
    Vehicle.find({}).exec()
    .then(vehicles => {
      return response.json(vehicles);
    });
}

export function show(request, response) {
    Vehicle.findById(request.params.id).exec()
    .then(vehicles => {
      return response.json(vehicles);
    });
   
}

export function create(request, response) {
    const vehicle = new Vehicle({
        year: request.body.year,
        make: request.body.make,
        model: request.body.model
      });
      vehicle.save()
      .then(vehicles => {
        return response.json(vehicles);
      });
}

export function update(request, response) {
    return response.json(vehicle[0].name = request.params.id);
}
export function remove(request, response) {
    return response.json(vehicle.pop());
}
