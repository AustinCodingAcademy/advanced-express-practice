import vehicleModel from "../models/vehicles";

export const list = (req, res) => {
    vehicleModel.find({}).exec()
    .then( list => res.json(list) );
}; 

export const show = (req, res) => {
    vehicleModel.findById(req.params.id).exec()
    .then( vehicle => res.json(vehicle) );
};

export const create = (req, res) => {
    vehicleModel.find({}).exec()
    .then( list => {
        const id = (list.length + 1);
        const vehicle = new vehicleModel({
            _id: id,
            year: req.body.year,
            make: req.body.make,
            model: req.body.model
        });
        vehicle.save()
        .then( veh => res.json(veh) );
    })
};

export const update = (req, res) => {
    return res.send('nah');
};

export const remove = (req, res) => {
    return res.send('nah');
};