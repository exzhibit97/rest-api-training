const assert = require("assert");
const { expect } = require("chai");
const proxyquire = require("proxyquire");
// const Vehicle
const VehicleRepository = proxyquire("../repositories/vehicleRepository");
describe("Parking repository tests", () => {
  let repository = null;

  beforeEach(() => {
    repository = new VehicleRepository();
  });

  afterEach(() => {
    sinon.restore();
  });

  describe("Returns array of vehicles: ", () => {
    it("checks equality", function() {
      assert.equal(true, true);
    });
  });
});
