let express = require("express");
const router = express.Router();
let {list,show,create,update,remove} = require("../controllers/VehicleController");

router.get("/vehicles", list);
router.get("/vehicle/:id", show);
router.post("/vehicles", create);
router.put("/vehicle/:id", update);
router.delete("/vehicle/:id", remove);

module.exports = router;