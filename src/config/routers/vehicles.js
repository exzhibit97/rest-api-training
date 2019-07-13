const express = require("express");
const router = express.Router();
const VehicleController = require("../../controllers/vehicleController");
const VehicleRepository = require("../../repositories/vehicleRepository");
const DataUtils = require('../../utils/dataUtils');

const dataUtils = new DataUtils();
const vehicleRepository = new VehicleRepository(dataUtils);
const vehicleController = new VehicleController(vehicleRepository);

router.get("/vehicles", vehicleController.getVehicles);
router.get("/vehicle/:id", vehicleController.getVehicle);
router.post("/vehicle", vehicleController.addVehicle);
router.put("/vehicle/:id", vehicleController.updateVehicle);
router.patch("/vehicle/:id/price", vehicleController.changePrice);
router.delete("/vehicle/:id", vehicleController.removeVehicle);

module.exports = router;
