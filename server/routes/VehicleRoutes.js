const express =  require("express");
const router = express.Router();
let {list,show,create,update,remove} = require( "../controllers/VehiclesControllers");

//created the routes for various http commands
router.get("/vehicles", list);
router.get("/vehicles/:id", show);
router.post("/vehicles", create);
router.put("/vehicles/:id", update);
router.delete("/vehicles/:id", remove);

module.exports =  router;