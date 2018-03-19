import vehicles from "../models/vehicles";

export const list = (req, res) => {
    return res.json(vehicles);
}; 

export const show = (req, res) => {
    let vehicle = vehicles.find(e => e._id == req.params.id);
    return res.json(vehicle);
};

export const create = (req, res) => {
    let id = (vehicles.length + 1);
    let vehicle = {
        _id: id,
        year: req.body.year,
        make: req.body.make,
        model: req.body.model
    }
    vehicles.push(vehicle);
    return res.json({});
};

export const update = (req, res) => {
    return res.json({theid: req.params.id});
};

export const remove = (req, res) => {
    return res.json({});
};