let express = require("express");
const router = express.Router();
let {list,show,create,update,remove} = require("../controllers/VehicleController");

router.get("/vehicles", list);
router.get("/vehicle/:id", show);
router.get("/vehicles", create);
router.get("/vehicle/:id", update);
router.get("/vehicle/:id", remove);

module.exports = router;