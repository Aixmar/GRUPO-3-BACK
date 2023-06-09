const { Ingredient } = require('../db');
const ingredients = require('../dbJsons/ingredientsJson');


const createIngredients = async () => {

  const allIngredientsDatabase = await Ingredient.findAll();
  if (allIngredientsDatabase.length) return;

  await Ingredient.bulkCreate(ingredients);
};



module.exports = createIngredients;