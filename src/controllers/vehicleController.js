const HttpStatus = require("../utils/http.status");
const VehiclesNotFoundError = require("../errors/vehicles.not.found.error");
class VehicleController {
  constructor(vehicleRepository) {
    this.vehicleRepository = vehicleRepository;
  }

  getVehicles = async (req, res) => {
    try {
      const vehiclesArray = await this.vehicleRepository.getVehicles();

      if (!vehiclesArray) {throw new VehiclesNotFoundError()};

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
    console.log(this.getVehicles());
    console.log("getting single vehicle");
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
