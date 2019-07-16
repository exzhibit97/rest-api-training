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

  removeVehicle = async id => {
    return await Vehicle.destroy({
      where: id
    });
  };

  changePrice = async (id, price) => {
    const updatedVehicle = await Vehicle.update(
      {
        price
      },
      {
        where: id
      }
    );

    return updatedVehicle[0] ? 1 : 0;
  };

  updateVehicle = async vehicle => {
    const { id, name, typeId, engine, price, color } = vehicle;

    const updatedVehicle = await Vehicle.update(
      {
        name,
        typeId,
        engine,
        price,
        color
      },
      { where: id }
    );

    return updatedVehicle[0] ? 1 : 0;
  };

  createVehicle = async vehicle => {
    const { name, typeId, engine, price, color } = vehicle;
    const createStatus = await Vehicle.create({
      name,
      typeId,
      engine,
      price,
      color
    });

    return createStatus.dataValues;
  };

  findVehicle = async id => {
    const findStatus = await Vehicle.findOne({
      where: id
    });

    return findStatus ? 1 : 0;
  };
}

module.exports = VehicleRepository;
