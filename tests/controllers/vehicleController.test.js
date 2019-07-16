const sinon = require("sinon");
const proxyquire = require("proxyquire");
const chai = require("chai");
const chaiHttp = require("chai-http");
const { expect } = chai;
chai.use(chaiHttp);

const vehicleRepository = {
  getVehicles: Promise.resolve(),
};

const mockResponse = () => {
  const res = {
    status: () => {},
    json: () => {}
  };
  res.status = sinon.stub().returns(res);
  res.json = sinon.stub().returns(res);
  return res;
};

const VehicleController = proxyquire(
  "../../src/controllers/vehicleController",
  {
    "../repositories/vehicleRepository": vehicleRepository
  }
);

describe("Vehicle controller tests", () => {
  let controller = null;

  beforeEach(() => {
    controller = new VehicleController(vehicleRepository);
  });

  afterEach(() => {
    sinon.restore();
  });

  describe("Method: getVehicles", async () => {
    context("Vehicles exist in database", async () => {
      let vehicles = null;
      let repositoryGetVehiclesStub = null;
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
      let req = null;

      beforeEach(async () => {
        repositoryGetVehiclesStub = sinon
          .stub(vehicleRepository, "getVehicles")
          .resolves(expectedResult);

        await controller.getVehicles(req,mockResponse());
      });

      it("Calls repository getVehicles", async () => {
        expect(repositoryGetVehiclesStub.called).to.be.equal(true);
      });

      it("Returns array of vehicle objects", () => {
        chai
          .request("http://localhost:3001")
          .get("/vehicles")
          .end((err, res) => {
            expect(res.body.vehicles).to.be.a('array');
          });
      });
    });

    // context("Vehicles do not exist in database", async () => {
    //   let vehicles = null;
    //   let repositoryGetVehiclesStub = null;
    //   let expectedResult = 0;

    //   beforeEach(async () => {
    //     repositoryGetVehiclesStub = sinon
    //       .stub(vehicleRepository, "getVehicles")
    //       .resolves(expectedResult);

    //     vehicles = await controller.getVehicles();
    //   });

    //   it("Calls repository getVehicles", async () => {
    //     expect(
    //       repositoryGetVehiclesStub.vehicleRepository.getVehicles.called
    //     ).to.be.equal(true);
    //   });

    //   it("Returns error when array is empty", () => {
    //     expect(vehicles).to.be.equal(expectedResult);
    //   });
    // });
  });
});
