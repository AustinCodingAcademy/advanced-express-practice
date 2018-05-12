const express = require("express")
const router = express.Router()
// Router variables that should match the controller
const { list,show,create } = require (
   '../controller/vehicleController')

// Use whatever method you need (get, post, etc)
router.get('/vehicles', list)
router.get('/vehicle/:id',show)
router.post('/vehicles',create)

module.exports = router