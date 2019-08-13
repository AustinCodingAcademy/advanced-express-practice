const express = require("express");
const router = express.Router();
const {list, show, create} = require("./controllers/vehicle");

let vehicles = require("../vehicles");
//vehicles
router.get('/vehicles', list)
router.get('/vehicles/:vehicleId', show)
router.post('/vehicles', create)

module.exports = router;