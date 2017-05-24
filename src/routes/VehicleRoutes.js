import express from "express";
const router = express.Router();
import vehicles from "../vehicles";

//Vehicles
//make things
router.get('/vehicles', (req,res) => {
  return res.json (vehicles);
})

router.get('/vehicles/:id', (req,res) => {
  const vehicle = vehicles.find(u=>u._id == req.params.id);
  return response.json(vehicle);
})

router.post('/vehicles', (req,res) => {
  vehicles.push(req.body);
  return res.json (req.body);
})

export default router;
