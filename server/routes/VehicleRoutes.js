const express = require("express");
const router = express.Router();
const {list,show,create,update,remove} = require( "../controllers/VehicleController.js");


router.get("/vehicles", list);
router.get("/vehicle/:id", show);
router.post("/vehicles", create);
// router.put("/vehicles/:id", update);
// router.delete("/vehicles/:id", remove);

module.exports = router;
