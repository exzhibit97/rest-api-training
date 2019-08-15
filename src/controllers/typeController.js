const HttpStatus = require("../utils/http.status");
const NotSufficientDataError = require("../errors/not.sufficient.data.error");
const TypeAlreadyExistsError = require("../errors/type.already.exist.error");

class VehicleController {
  constructor(typeRepository) {
    this.typeRepository = typeRepository;
  }

  createType = async (req, res) => {
    try {
        const { type } = req.body;
  
        if (!type) {
          throw new NotSufficientDataError();
        }
       
        const foundType = await this.typeRepository.findType(type);

        if (foundType) {
            throw new TypeAlreadyExistsError();
        }

        const addedType = await this.typeRepository.createType(type);
  
        return res.status(HttpStatus.HTTP_200_OK).json({
          added: addedType
        });
      } catch (error) {
        return res.status(error.status).json({
          message: error.message,
          type: error.type
        });
      }
  }

}

module.exports = VehicleController;
