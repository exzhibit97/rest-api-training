const express = require("express");
const router = express.Router();
const VehicleController = require("../controllers/vehicleController");

const vehicleController = new VehicleController();

router.get("/vehicles", vehicleController.getVehicles);
router.get("/vehicle/:id", vehicleController.getVehicle);
router.post("/vehicle", vehicleController.addVehicle);
router.put("/vehicle/:id", vehicleController.updateVehicle);
router.patch("/vehicle/:id/price", vehicleController.changePrice);
router.delete("/vehicle/:id", vehicleController.removeVehicle);

module.exports = router;
