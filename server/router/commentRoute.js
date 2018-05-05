const express = require("express")
const router = express.Router()
// Router variables that should match the controller
const { list,show,create } = require (
   '../controller/commentController')

// Use whatever method you need (get, post, etc)
router.get('/comments', list)
router.get('/comments/:id',show)
router.post('/comments',create)

module.exports = router