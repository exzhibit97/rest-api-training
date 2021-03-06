const sinon = require("sinon");
const proxyquire = require("proxyquire");
const { expect } = require("chai");
const { makeMockModels } = require("sequelize-test-helpers");
const DataUtils = require('../../src/utils/dataUtils');

const mockModels = makeMockModels({ Vehicle: { findAll: sinon.stub() } });
const dataUtils = new DataUtils();
const VehicleRepository = proxyquire(
  "../../src/repositories/vehicleRepository",
  {
    dataUtils: dataUtils,
    "../models": mockModels
  }
);

describe("Vehicle repository tests", () => {
  let repository = null;
  let dataUtils = null;

  beforeEach(() => {
    dataUtils = new DataUtils();
    repository = new VehicleRepository(dataUtils);
  });

  afterEach(() => {
    sinon.restore();
  });

  describe("Method: getVehicles", async () => {
    context("Vehicles exist in database", async () => {
      let vehicles = null;
      let mapArrayStub = null;
      let input = [
        {
          dataValues: {
            id: 1,
            name: "Volkswagen Golf",
            engine: "Gasoline",
            color: "Red",
            price: "3000",
            typeId: 1,
            createdAt: "2018-10-10T10:00:00.000Z",
            updatedAt: "2018-10-10T10:00:00.000Z"
          }
        },
        {
          dataValues: {
            id: 2,
            name: "Jeep Grand Cherokee",
            engine: "Gasoline",
            color: "Gray",
            price: "11000",
            typeId: 2,
            createdAt: "2018-10-10T10:00:00.000Z",
            updatedAt: "2018-10-10T10:00:00.000Z"
          }
        }
      ];
      let expectedResult = [
        {
          id: 1,
          name: "Volkswagen Golf",
          engine: "Gasoline",
          color: "Red",
          price: "3000",
          typeId: 1,
          createdAt: "2018-10-10T10:00:00.000Z",
          updatedAt: "2018-10-10T10:00:00.000Z"
        },
        {
          id: 2,
          name: "Jeep Grand Cherokee",
          engine: "Gasoline",
          color: "Gray",
          price: "11000",
          typeId: 2,
          createdAt: "2018-10-10T10:00:00.000Z",
          updatedAt: "2018-10-10T10:00:00.000Z"
        }
      ];

      beforeEach(async () => {
        mapArrayStub = sinon
          .stub(dataUtils, "mapDataValues")
          .resolves(expectedResult);

        vehicles = await repository.getVehicles();
      });

      it("Calls Vehicle.findAll", async () => {
        expect(mockModels.Vehicle.findAll.called).to.be.equal(true);
      });

      it("Calls mapping array from data utils", async () => {
        expect(mapArrayStub.called).to.be.equal(true);
      });

      it("Returns array of vehicle objects", () => {
        expect(vehicles).to.be.equal(expectedResult);
      });
    });

    context("Vehicles do not exist in database", async () => {
      let vehicles = null;
      let mapArrayStub = null;
      let expectedResult = 0;

      beforeEach(async () => {
        mapArrayStub = sinon
          .stub(dataUtils, "mapDataValues")
          .resolves(expectedResult);

        vehicles = await repository.getVehicles();
      });

      it("Calls Vehicle.findAll", async () => {
        expect(mockModels.Vehicle.findAll.called).to.be.equal(true);
      });

      it("Calls mapping array from data utils", async () => {
        expect(mapArrayStub.called).to.be.equal(true);
      });

      it("Returns empty array", () => {
        expect(vehicles).to.be.equal(expectedResult);
      });
    });
  });
});
