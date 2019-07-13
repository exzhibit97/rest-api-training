"use strict";

const types = require("./type");

module.exports = (sequelize, DataTypes) => {
  const Vehicle = sequelize.define(
    "Vehicle",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: DataTypes.STRING
      },
      engine: {
        type: DataTypes.STRING
      },
      color: {
        type: DataTypes.STRING
      },
      price: {
        type: DataTypes.NUMBER
      },
      typeId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        name: "typeId",
        field: "type_id",
        references: {
          model: types,
          key: "id"
        }
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        name: "createdAt",
        field: "created_at"
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
        name: "updatedAt",
        field: "updated_at"
      }
    },
    { underscored: true }
  );

  Vehicle.associate = models => {
    // associations can be defined here
  };

  return Vehicle;
};
