var express = require('express')
var router = express.Router();
let vehicles = require("../vehicles");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());

router.get('/', function(req, res){
    res.json(vehicles);
  })

router.get('/:id', function(req, res){
    let id = req.params.id
    console.log(id)
    let vehicle = vehicles.filter(v => v["_id"] == id);
    res.json(vehicle);
  })


router.post('/', function(req, res){
    let vehicle = req.body;
    vehicles.push(vehicle);
    res.json(vehicle);
})




  module.exports = router