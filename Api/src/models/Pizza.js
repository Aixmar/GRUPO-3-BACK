const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "Pizza",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
      },

      image: {
        type: DataTypes.STRING,
      },
      price: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      vegetarian: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      detail: {
        type: DataTypes.JSON,
        allowNull: true,
      },
      reviews: {
        type: DataTypes.JSON,
      },
      category: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      rating: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      stock: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      active:{
        type: DataTypes.BOOLEAN,
        allowNull:false
      }
    },
    { timestamps: false }
  );
};
