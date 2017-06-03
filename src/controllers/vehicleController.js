import VehicleModel from "../models/Vehicle";

export function list(req, res) {
    VehicleModel.find({})
    .exec()
    .then((vehicles) => {
        return res.json(vehicles);
    });
}

export function show(req, res) {
    VehicleModel.findById(req.params.id)
    .exec()
    .then((vehicle) => {
        return res.json(vehicle);
    })
}

export function create(req, res) {
    const vehicle = new VehicleModel({
        body: req.body.body
    });
    vehicle.save()
    .then((c) => {
        return res.json(c);
    });
}