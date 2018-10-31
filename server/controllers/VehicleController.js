app.use(express.static('public'));
// Body Parser Middleware
app.use(bodyParser.json());

const vehicles = require("./vehicles");
let vehicleIdCount = vehicles.length; 
// .get vehicles
export function list(req, res) {
   return res.json(vehicles);
}
// .get vehicle by ID
export function show(req, res) {
   let vehicle = vehicles.find((vehicle) => vehicle._id == req.params.id);
   return res.json(vehicle);
}
// .post new vehicle
export function create(req, res) {
   vehicleIdCount++
   const newVehicle = {
      _id: vehicleIdCount,
      name: req.body.name,
      occupation: req.body.occupation
   }
   // add new vehicle to vehicles array
   vehicles.push(newVehicle);
   // return array with added vehicle
   return res.json(vehicles);
}
// .put vehicle by ID
export function update(req, res) {
   return res.json({theId: req.params.id});
}
// .delete vehicle by ID
export function remove(req, res) {
   return res.json({});
}