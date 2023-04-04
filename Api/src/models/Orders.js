const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "Orders", {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        products: {
            type: DataTypes.ARRAY(DataTypes.JSONB),
            allowNull: false
        },
        userName:{
            type: DataTypes.STRING,
            allowNull: false,
        }
    })}