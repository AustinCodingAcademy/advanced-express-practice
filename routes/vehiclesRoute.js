const express = require("express");
const router = express.Router();
const {list, create} = require("../controller/vehiclesController")

router.get("/vehicles", list);
//router.post('/vehicles', create);

module.exports = router;