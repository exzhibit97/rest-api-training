const sinon = require("sinon");
const proxyquire = require("proxyquire");
const { expect } = require("chai");
const { makeMockModels } = require("sequelize-test-helpers");

const mockModels = makeMockModels({ Vehicle: { findAll: sinon.stub() } });
const Vehicle = {
  findAll: () => {}
};

const dataUtils = {
  mapDataValues: () => {}
};

const VehicleRepository = proxyquire(
  "../../src/repositories/vehicleRepository",
  {
    "../utils/dataUtils": dataUtils,
    "../models": mockModels
  }
);

describe("Parking repository tests", () => {
  let repository = null;

  beforeEach(() => {
    repository = new VehicleRepository(dataUtils);
  });

  afterEach(() => {
    sinon.restore();
  });

  describe("Method: getVehicles", async () => {
    context("Vehicles exist in database", async () => {
      let vehicles = null;
      let mapArrayStub = null;
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
        },
        {
          id: 3,
          name: "Solaris",
          engine: "Diesel",
          color: "Yellow",
          price: "11000",
          typeId: 3,
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
  });
});

/*
const googleClientExtractorSpy = sinon.spy(adapter, 'googleClient');

    await adapter.extractGoogleSheetRowsFunction();

    expect(googleClientExtractorSpy.called).to.be.equal(true);
*/
