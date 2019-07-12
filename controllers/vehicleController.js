class VehicleController {
  async getVehicles(req, res) {
    console.log(req);
    console.log("getting vehicles");
  }

  async getVehicle(req, res) {
    console.log("getting single vehicle");
  }

  async removeVehicle(req, res) {
    console.log("removing vehicle");
  }

  async changePrice(req, res) {
    console.log("changing price");
  }

  async updateVehicle(req, res) {
    console.log("updating vehicle");
  }

  async addVehicle(req, res) {
    console.log("adding vehicle");
  }
}

module.exports = VehicleController;
