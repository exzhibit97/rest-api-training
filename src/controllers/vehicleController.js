const HttpStatus = require("../utils/http.status");
const VehiclesNotFoundError = require("../errors/vehicles.not.found.error");
const VehicleNotFoundError = require("../errors/vehicle.not.found.error");
class VehicleController {
  constructor(vehicleRepository) {
    this.vehicleRepository = vehicleRepository;
  }

  getVehicles = async (req, res) => {
    try {
      const vehiclesArray = await this.vehicleRepository.getVehicles();

      if (!vehiclesArray) {
        throw new VehiclesNotFoundError();
      }

      return res.status(HttpStatus.HTTP_200_OK).json({
        vehicles: vehiclesArray
      });
    } catch (error) {
      return res.status(error.status).json({
        message: error.message,
        type: error.type
      });
    }
  };

  getVehicle = async (req, res) => {
    try {
      const { params: id } = req;
      const vehicle = await this.vehicleRepository.getVehicle(id);

      if (!vehicle) {
        throw new VehicleNotFoundError();
      }

      return res.status(HttpStatus.HTTP_200_OK).json({
        vehicle
      });
    } catch (error) {
      return res.status(error.status).json({
        message: error.message,
        type: error.type
      });
    }
  };

  removeVehicle = async (req, res) => {
    console.log("removing vehicle");
  };

  changePrice = async (req, res) => {
    console.log("changing price");
  };

  updateVehicle = async (req, res) => {
    console.log("updating vehicle");
  };

  addVehicle = async (req, res) => {
    console.log("adding vehicle");
  };
}

module.exports = VehicleController;
