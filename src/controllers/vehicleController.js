class VehicleController {
  constructor(vehicleRepository) {
    this.vehicleRepository = vehicleRepository;
  }

  getVehicles = async (req, res) => {
    const vecs = await this.vehicleRepository.getVehicles();
    console.log("getting vehicles");
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
