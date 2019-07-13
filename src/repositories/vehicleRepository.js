Vehicle = require("../models").Vehicle;

class VehicleRepository {
  constructor(dataUtils) {
    this.dataUtils = dataUtils;
  }

  getVehicles = async () => {
    const vehiclesData = await Vehicle.findAll();

    const vehicles = await this.dataUtils.mapDataValues(vehiclesData);

    return vehicles;
  };

  getVehicle = async (req, res) => {
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

module.exports = VehicleRepository;
