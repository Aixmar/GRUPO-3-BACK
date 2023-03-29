const { Pizza, Ingredient } = require("../db");

const getAllPizzas = async () => {
  return await Pizza.findAll({
    include: { model: Ingredient, through: { attributes: [] } },
  });
};

const createPizza = async (name, image, userId, ingredientIds, price, vegetarian, detail, active, category) => {
  const newPizza = await Pizza.create({ name, image, price, vegetarian, detail, active, category });
  await newPizza.setUser(userId);
  await newPizza.addIngredients(ingredientIds);
  return newPizza;
};

const getPizza = async (id) => {
  return await Pizza.findByPk(id);
};

const updatePizza = async (id,body) => {
  await Pizza.update(body,{
    where: {
      id
    }
  })
}

const updateReviewsController = async (id,body) => {
  console.log(body);
  const item = await Pizza.findByPk(id);
  if (!item) {
    return res.status(404).json({ error: "Item not found" });
  }
  
  item.reviews = item.reviews || [];
  console.log(item.reviews);
  item.reviews = [...item.reviews,{ ...body}];
  console.log(item.reviews);
    //para guardar los datos
  await item.save();
  return item;

};  

const deletePizza = async (id) => {
  await Pizza.destroy({where : {id}})
}

module.exports = {
  getAllPizzas,
  createPizza,
  getPizza,
  updatePizza,
  deletePizza,
  updateReviewsController
};
