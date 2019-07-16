Vehicle = require("../models").Vehicle;

class VehicleRepository {
  constructor(dataUtils) {
    this.dataUtils = dataUtils;
  }

  getVehicles = async () => {
    const vehiclesData = await Vehicle.findAll();

    const vehicles = await this.dataUtils.mapDataValues(vehiclesData);

    return vehicles.length > 0 ? vehicles : 0;
  };

  getVehicle = async id => {
    const vehicleData = await Vehicle.findOne({ where: id });

    if (!vehicleData) {
      return 0;
    }
    
    const { dataValues } = vehicleData;

    return dataValues;
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
