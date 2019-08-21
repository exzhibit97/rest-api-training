const HttpStatus = require("../utils/http.status");
const VehiclesNotFoundError = require("../errors/vehicles.not.found.error");
const VehicleNotFoundError = require("../errors/vehicle.not.found.error");
const VehicleNotUpdatedError = require("../errors/vehicle.not.updated.error");
const NotSufficientDataError = require("../errors/not.sufficient.data.error");
const TypeNotFoundError = require("../errors/type.not.found.error");
class VehicleController {
  constructor(vehicleRepository, typeRepository) {
    this.vehicleRepository = vehicleRepository;
    this.typeRepository = typeRepository;
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
      console.log(error);
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
    try {
      const { params: id } = req;

      const deleteStatus = await this.vehicleRepository.removeVehicle(id);

      return res.status(HttpStatus.HTTP_200_OK).json({
        deleted: deleteStatus
      });
    } catch (error) {
      return res.status(error.status).json({
        message: error.message,
        type: error.type
      });
    }
  };

  changePrice = async (req, res) => {
    try {
      const { price } = req.body;
      const { params: id } = req;

      const patchStatus = await this.vehicleRepository.changePrice(id, price);

      return res.status(HttpStatus.HTTP_200_OK).json({
        changedPrice: patchStatus
      });
    } catch (error) {
      return res.status(error.status).json({
        message: error.message,
        type: error.type
      });
    }
  };

  updateVehicle = async (req, res) => {
    try {
      const { name, type_id: typeId, engine, price, color } = req.body;
      const { params: id } = req;
      const vehicle = { id, name, typeId, engine, price, color };
      const vehicleExists = await this.vehicleRepository.findVehicle(id);

      if (!vehicleExists) {
        throw new VehicleNotUpdatedError();
      }

      const updateStatus = await this.vehicleRepository.updateVehicle(vehicle);

      return res.status(HttpStatus.HTTP_200_OK).json({
        updated: updateStatus
      });
    } catch (error) {
      return res.status(error.status).json({
        message: error.message,
        type: error.type
      });
    }
  };

  addVehicle = async (req, res) => {
    try {
      const { name, type_id: typeId, engine, price, color } = req.body;

      if (!name || !typeId || !engine || !price || !color) {
        throw new NotSufficientDataError();
      }

      const vehicle = { name, typeId, engine, price, color };
      const addedVehicle = await this.vehicleRepository.createVehicle(vehicle);

      return res.status(HttpStatus.HTTP_200_OK).json({
        added: addedVehicle
      });
    } catch (error) {
      return res.status(error.status).json({
        message: error.message,
        type: error.type
      });
    }
  };

  changeVehiclesType = async (req, res) => {
    try {
      const { carname, typename } = req.body;

      if (!carname || !typename) {
        throw new NotSufficientDataError();
      }

      const foundType = await this.typeRepository.findType(typename);

      if (!foundType.id) {
        throw new TypeNotFoundError();
      }
      const { id } = foundType;

      const foundCars = await this.vehicleRepository.getNamedVehicles(carname);

      if (!foundCars) {
        throw new VehiclesNotFoundError();
      }

      const updatedVehicles = await this.vehicleRepository.updateVehiclesType(
        carname,
        id
      );

      return res.status(HttpStatus.HTTP_200_OK).json({
        updated: updatedVehicles[0]
      });
    } catch (error) {
      return res.status(error.status).json({
        message: error.message,
        type: error.type
      });
    }
  };
}

module.exports = VehicleController;
