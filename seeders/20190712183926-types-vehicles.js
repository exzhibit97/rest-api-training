"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    queryInterface.bulkInsert(
      "types",
      [
        {
          name: "Samochód osobowy",
          created_at: "2018-10-10 10:00:00",
          updated_at: "2018-10-10 10:00:00"
        },
        {
          name: "Samochód terenowy",
          created_at: "2018-10-10 10:00:00",
          updated_at: "2018-10-10 10:00:00"
        },
        {
          name: "Autobus",
          created_at: "2018-10-10 10:00:00",
          updated_at: "2018-10-10 10:00:00"
        },
        {
          name: "Motorower",
          created_at: "2018-10-10 10:00:00",
          updated_at: "2018-10-10 10:00:00"
        },
        {
          name: "Motocykl",
          created_at: "2018-10-10 10:00:00",
          updated_at: "2018-10-10 10:00:00"
        }
      ],
      {}
    );
    return queryInterface.bulkInsert(
      "vehicles",
      [
        {
          name: "Volkswagen Golf",
          engine: "Gasoline",
          color: "Red",
          price: 2999.99,
          type_id: 1,
          created_at: "2018-10-10 10:00:00",
          updated_at: "2018-10-10 10:00:00"
        },
        {
          name: "Jeep Grand Cherokee",
          engine: "Gasoline",
          color: "Gray",
          price: 10999.99,
          type_id: 2,
          created_at: "2018-10-10 10:00:00",
          updated_at: "2018-10-10 10:00:00"
        },
        {
          name: "Solaris",
          engine: "Diesel",
          color: "Yellow",
          price: 10999.99,
          type_id: 3,
          created_at: "2018-10-10 10:00:00",
          updated_at: "2018-10-10 10:00:00"
        },
        {
          name: "Honda CBR 150",
          engine: "Gasoline",
          color: "Red",
          price: 999.99,
          type_id: 4,
          created_at: "2018-10-10 10:00:00",
          updated_at: "2018-10-10 10:00:00"
        },
        {
          name: "Kawasaki Ninja",
          engine: "Gasoline",
          color: "Black",
          price: 15999.99,
          type_id: 5,
          created_at: "2018-10-10 10:00:00",
          updated_at: "2018-10-10 10:00:00"
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
