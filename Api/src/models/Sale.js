const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "Sale", {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        total: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        products: {
            type: DataTypes.ARRAY(DataTypes.JSONB),
            allowNull: false
        },
    })}