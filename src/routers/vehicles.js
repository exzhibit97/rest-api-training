const express = require("express");
const router = express.Router();
const VehicleController = require("../controllers/vehicleController");
const VehicleRepository = require("../repositories/vehicleRepository");
const TypeRepository = require("../repositories/typeRepository");
const DataUtils = require("../utils/dataUtils");
const AuthMiddleware = require("../middleware/auth.middleware");

const dataUtils = new DataUtils();
const typeRepository = new TypeRepository();
const vehicleRepository = new VehicleRepository(dataUtils);
const vehicleController = new VehicleController(vehicleRepository, typeRepository);
const authMiddleware = new AuthMiddleware();

router.get("/vehicles", vehicleController.getVehicles);
router.get("/vehicle/:id", vehicleController.getVehicle);
router.post("/vehicle", vehicleController.addVehicle);
router.put("/vehicle/:id", vehicleController.updateVehicle);
router.patch("/vehicle/:id/price", vehicleController.changePrice);
router.patch("/vehicles/type", vehicleController.changeVehiclesType);
router.delete(
  "/vehicle/:id",
  authMiddleware.checkToken,
  vehicleController.removeVehicle
);

module.exports = router;
