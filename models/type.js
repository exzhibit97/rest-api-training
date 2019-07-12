"use strict";
module.exports = (sequelize, DataTypes) => {
  const Type = sequelize.define(
    "Type",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: DataTypes.STRING
      },
      createdAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        name: "createdAt",
        field: "created_at"
      },
      updatedAt: {
        type: DataTypes.DATE,
        name: "updatedAt",
        field: "updated_at"
      }
    },
    { underscored: true }
  );
  Type.associate = function(models) {
    // associations can be defined here
  };
  return Type;
};
