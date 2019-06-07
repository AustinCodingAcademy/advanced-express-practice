const express = require('express');
const router = express.Router();
let vehicles = require("../controllers/VehicleController");

router.get('/vehicles', vehicles.list);
router.get("/vehicles/:id", vehicles.show);
router.post("/vehicles", vehicles.create);


module.exports = router;