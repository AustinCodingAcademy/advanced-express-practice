let express = require("express");
const router = express.Router();
let {list,show,create,update,remove} = require("../controllers/VehicleController");

router.get("/vehicles", list);
router.get("/vehicles/:id", show);
router.post("/vehicles", create);

module.exports = router;