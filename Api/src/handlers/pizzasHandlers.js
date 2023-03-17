const {
  getAllPizzas,
  createPizza,
  getPizza,
} = require("../controllers/pizzasController");

const getPizzasHandler = async (req, res) => {
  try {
    const allPizzas = await getAllPizzas();
    res.status(200).json(allPizzas);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const postPizzaHandler = async (req, res) => {
  const { name, image, userId, ingredientIds, detail, price, vegetarian } = req.body;
  console.log('new pizza----->', req.body);

  try {
    const newPizza = await createPizza(name, image, userId, ingredientIds, price, vegetarian, detail);
    res.status(200).json(newPizza);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getPizzaHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const pizza = await getPizza(id);
    res.status(200).json(pizza);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getPizzasHandler,
  postPizzaHandler,
  getPizzaHandler,
};
