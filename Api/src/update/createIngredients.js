const { Ingredient } = require('../db');
const ingredients = require('./ingredientsJson')

// const ingredients = [
//   // { name: 'Lomo', image: 'https://ejemplo.com/lomo.jpg', category: "proteins", veggie: false, price: 799 },
//   // { name: 'Tomatoes', image: 'https://ejemplo.com/tomates.jpg', category: "fruit", veggie: true, price: 299 },
//   // { name: 'Albahaca', image: 'https://ejemplo.com/albahaca.jpg', category: "toppings", veggie: true, price: 99 },
//   // { name: 'Garlic', image: 'https://ejemplo.com/ajo.jpg', category: "toppings", veggie: true, price: 49 },
//   // { name: 'Spinach', image: 'https://ejemplo.com/espinaca.jpg', category: "vegetable", veggie: true, price: 199 },
//   // { name: 'Blue cheese', image: 'https://ejemplo.com/roquefort.jpg', category: "cheese", veggie: true, price: 599 },
//   // { name: 'Tuna', image: 'https://ejemplo.com/atun.jpg', category: "proteins", veggie: false, price: 249 },
//   // { name: 'Pinnaple', image: 'https://ejemplo.com/pina.jpg', category: "fruit", veggie: true, price: 199 },
//   // { name: 'Mortadella', image: 'https://ejemplo.com/mortadela.jpg', category: "proteins", veggie: false, price: 299 },
//   // { name: 'Oregano', image: 'https://ejemplo.com/oregano.jpg', category: "toppings", veggie: true, price: 49 },
//   // { name: 'Parmesan', image: 'https://ejemplo.com/cheese.jpg', category: 'cheese', veggie: true, price: 69 },
//   // { name: 'Provolone', image: 'https://ejemplo.com/cheese.jpg', category: 'cheese', veggie: true, price: 69 },
//   // { name: 'Cheddar', image: 'https://ejemplo.com/cheese.jpg', category: 'cheese', veggie: true, price: 69 },
//   // { name: 'Mozzarella', image: 'https://ejemplo.com/cheese.jpg', category: 'cheese base', veggie: true, price: 69 },
//   // { name: 'Lactose-Free Mozzarella', image: 'https://ejemplo.com/cheese.jpg', category: 'cheese base', veggie: true, price: 69 },
//   // { name: 'Vegan Mozzarella', image: 'https://ejemplo.com/cheese.jpg', category: 'cheese base', veggie: true, price: 69 },
//   // { name: 'Tomato sauce', image: 'https://ejemplo.com/tomato-sauce.jpg', category: 'sauce', veggie: true, price: 39 },
//   // { name: 'Without Mozzarella', image: 'https://ejemplo.com/cheese.jpg', category: 'cheese base', veggie: true, price: 00 },
//   // { name: 'Gluten-Free dough', image: 'https://ejemplo.com/cheese.jpg', category: 'dough', veggie: true, price: 120 },
//   // { name: 'Wholemeal flour dough', image: 'https://ejemplo.com/cheese.jpg', category: 'dough', veggie: true, price: 120 },
//   // { name: 'Wheat flour dough', image: 'https://ejemplo.com/cheese.jpg', category: 'dough', veggie: true, price: 120 },
//   // { name: 'Pepperoni', image: 'https://ejemplo.com/pepperoni.jpg', category: 'meat', veggie: false, price: 79 },
//   // { name: 'Sausage', image: 'https://ejemplo.com/sausage.jpg', category: 'meat', veggie: false, price: 89 },
//   // { name: 'Bacon', image: 'https://ejemplo.com/bacon.jpg', category: 'meat', veggie: false, price: 99 },
//   // { name: 'Ham', image: 'https://ejemplo.com/ham.jpg', category: 'meat', veggie: false, price: 89 },
//   // { name: 'Chicken', image: 'https://ejemplo.com/chicken.jpg', category: 'meat', veggie: false, price: 89 },
//   // { name: 'Beef', image: 'https://ejemplo.com/beef.jpg', category: 'meat', veggie: false, price: 99 },
//   // { name: 'Meatballs', image: 'https://ejemplo.com/meatballs.jpg', category: 'meat', veggie: false, price: 99 },
//   // { name: 'Anchovies', image: 'https://ejemplo.com/anchovies.jpg', category: 'meat', veggie: false, price: 109 },
//   // { name: 'Mushrooms', image: 'https://ejemplo.com/mushrooms.jpg', category: 'toppings', veggie: true, price: 59 },
//   // { name: 'Onions', image:'https://ejemplo.com/onions.jpg', category: 'toppings', veggie: true, price: 49 },
//   // { name: 'Bell peppers', image: 'https://ejemplo.com/bell-peppers.jpg', category: 'toppings', veggie: true, price: 59 },
//   // { name: 'Jalapeños', image: 'https://ejemplo.com/jalapenos.jpg', category: 'toppings', veggie: true, price: 69 },
//   // { name: 'Pineapple', image: 'https://ejemplo.com/pineapple.jpg', category: 'toppings', veggie: true, price: 69 },
//   // { name: 'Olives', image: 'https://ejemplo.com/olives.jpg', category: 'toppings', veggie: true, price: 49 },
  
// ];


const createIngredients = async () => {

  const allIngredientsDatabase = await Ingredient.findAll();
  if (allIngredientsDatabase.length) return;

  await Ingredient.bulkCreate(ingredients);
};



module.exports = createIngredients;