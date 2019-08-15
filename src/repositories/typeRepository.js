Type = require("../models").Type;

class TypeRepository {
  createType = async name => {
    const createStatus = await Type.create({
      name
    });

    return createStatus.dataValues;
  };

  findType = async type => {
    const typeData = await Type.findOne({ where: { name: type } });
    if (typeData) {
      return typeData.dataValues;
    }

    return 0;
  };
}

module.exports = TypeRepository;
