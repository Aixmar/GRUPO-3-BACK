const { Ingredient } = require("../db");
const { Op } = require("sequelize");

const allIngredients = async (name) => {
  let ingredients
  if(name === undefined){
    ingredients = await Ingredient.findAll();
  }else{
    ingredients = await Ingredient.findAll({
      where :{
        name: {
              [Op.iLike]: "%"+name+"%",
          }
      }
  });
  if(!ingredients.length) throw new Error(`Ingredient with name ${name} does not exist`);
  }
  return ingredients
};

module.exports = {
  allIngredients,
};
