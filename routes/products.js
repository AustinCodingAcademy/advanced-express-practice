var express = require('express')
var router = express.Router();
let products = require("../products");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());

router.get('/', function(req, res){
    res.json(products);
  })


router.get('/:id', function(req, res){
    let id = req.params.id
    let product = products.filter(p => p["_id"] == id);
    res.json(product);
})


router.post('/', function(req, res){
    let product = req.body;
    products.push(product);
    res.json(product);
})


module.exports = router