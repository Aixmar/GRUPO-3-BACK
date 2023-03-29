const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "User",
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

      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },

      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      accessToken :{
        type:DataTypes.STRING 
      },


      birthday: {
        type: DataTypes.STRING,
      },

      refreshToken: {
        type: DataTypes.STRING,
      },

      image: {
        type: DataTypes.STRING,
      },
      cart: {
        type: DataTypes.JSONB
      },

      previusPurchase:{
        type: DataTypes.JSONB
      },

      rol:{
        type: DataTypes.STRING,
      },

      favorites: {
        type: DataTypes.JSONB,
      }
    },
    { timestamps: false }
  );
};
