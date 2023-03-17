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
        type: DataTypes.FLOAT,
        allowNull: false,
      },
     vegetarian: {
      type: DataTypes.BOOLEAN,
      allowNull:false,
     },
     detail: {
      type: DataTypes.JSON,
      allowNull: false,
     }
    },
    { timestamps: false }
  );
};
