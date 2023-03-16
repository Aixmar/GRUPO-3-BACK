const { Ingredient } = require('../db');
const ingredients = require('./ingredientsJson')


const createIngredients = async () => {

  const allIngredientsDatabase = await Ingredient.findAll();
  if (allIngredientsDatabase.length) return;

  await Ingredient.bulkCreate(ingredients);
};



module.exports = createIngredients;