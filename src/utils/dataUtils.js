class DataUtils {
  mapDataValues = async dataArray => {
    const mappedArray = [];

    dataArray.map(dataItem => {
      mappedArray.push(dataItem.dataValues);
    });

    return mappedArray;
  };
}

module.exports = DataUtils;
