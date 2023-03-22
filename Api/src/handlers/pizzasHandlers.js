const {
  getAllPizzas,
  createPizza,
  getPizza,
  updatePizza,
  deletePizza,
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

const putPizzaHandler = async (req,res) => {
  const {id} = req.params
  const body = req.body
  try {
    await updatePizza(id,body)
    res.status(200).json({changed:true})
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}

const deletePizzaHandler = async (req,res) => {
  const {id} = req.params
  try {
    await deletePizza(id)
    res.status(200).json({deleted:true})
  } catch (error) {
    res.status(400).json({error:error.message})
  }
}

module.exports = {
  getPizzasHandler,
  postPizzaHandler,
  getPizzaHandler,
  putPizzaHandler,
  deletePizzaHandler,
};
