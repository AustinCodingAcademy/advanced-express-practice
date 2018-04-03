import VehicleModel from "../models/VehicleModel";

export const list = (req, res) => {
    VehicleModel.find({}).exec()
    .then( list => res.json(list) );
};

export const show = (req, res) => {
    VehicleModel.findById(req.params.id).exec()
    .then( vehicle => res.json(vehicle) );
};

export const create = (req, res) => {
    VehicleModel.find({}).exec()
    .then( list => {
        const id = (list.length + 1);
        const vehicle = new VehicleModel({
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
    return res.send('WUT');
};

export const remove = (req, res) => {
    return res.send('WUT');
};
