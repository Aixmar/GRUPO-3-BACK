const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "Ingredient",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },

      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      image: {
        type: DataTypes.STRING,
      },

      category: {
        type: DataTypes.STRING,
      },

      veggie: {
        type: DataTypes.BOOLEAN,
      },

      price: {
        type: DataTypes.FLOAT,
      },
    },
    { timestamps: false }
  );
};
