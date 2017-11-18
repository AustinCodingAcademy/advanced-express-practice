const express = require("express");
const router = express.Router();
const controller = require("../controllers/VehiclesController");

router.get("/vehicles", controller.list);
router.get("/vehicles/:id", controller.show);
router.post("/vehicles", controller.create);
//router.put("/vehicles/:id", update);
//router.delete("/vehicles/:id", remove);

module.exports  = router;