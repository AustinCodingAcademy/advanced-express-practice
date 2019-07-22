const express = require("express");
const router = express.Router();
const {list, show, create} = require("../controller/vehicles")

router.get("/vehicles", list);
router.get("/vehicles/:idNum", show);
router.post('/vehicles', create);

module.exports = router;