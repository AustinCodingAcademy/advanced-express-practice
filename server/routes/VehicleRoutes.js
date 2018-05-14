const express =  require("express");
const router = express.Router();
let {list,show,create} = require( "../controllers/VehiclesControllers");

//created the routes for various http commands
router.get("/vehicles", list);
router.get("/vehicles/:id", show);
router.post("/vehicles", create);


module.exports =  router;