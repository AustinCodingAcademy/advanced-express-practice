const Vehcile = require("../models/VechicleModel");
const vechicles = require("../vehicles");

let vechiclesIdCount = vechicles.length;

function list(req, res) {
  Vehcile.find()
    .exec()
    .then((result) => {
      console.log(result);
      return res.json(result);
    });
}

function show(req, res) {
  const vechicle = vechicles.find((c) => {
    return c._id === Number(req.params.id);
  });
  res.json(vechicle);
}

function create(req, res) {
  vechiclesIdCount++;
  vechicles.push({ ...req.body, _id: vechiclesIdCount });
  res.json(vechicles[vechicles.length - 1]);
}

function update(req, res) {
  const id = vechicles.findIndex((c) => {
    return c._id === Number(req.params.id);
  });

  const current = vechicles[id];

  vechicles[id] = { current, ...req.body };
  res.json(vechicles[id]);
}

function remove(req, res) {
  const id = vechicles.findIndex((c) => {
    return c._id === Number(req.params.id);
  });

  vechicles.slice(id, 1);
  res.send("deleted");
}

module.exports = {
  list,
  show,
  create,
  update,
  remove,
};
