const ingredients = [
  { name: "Albahaca", category: "Toppings", veggie: true, extra: true, price: 0.99 },
  { name: "Garlic", category: "Toppings", veggie: true, extra: true, price: 0.49 },
  { name: "Spinach", category: "Toppings", veggie: true, extra: false, price: 1.99 },
  { name: "Mortadella", category: "Proteins", veggie: false, extra: true, price: 2.99 },
  { name: "Oregano", category: "Toppings", veggie: true, extra: false, price: 0.49 },
  { name: "Provolone", category: "Cheese", veggie: true, extra: true, price: 0.69 },
  { name: "Beef", category: "Meat", veggie: false, extra: false, price: 0.99 },
  { name: "Meatballs", category: "Meat", veggie: false, extra: true, price: 0.99 },
  { name: "Mozzarella", category: "Cheese base", veggie: true, extra: true, price: 0.69 },
  {
    name: "Lactose-Free Mozzarella",
    category: "Cheese base",
    veggie: true,
    price: 0.69,
  },
  {
    name: "Vegan Mozzarella",
    category: "Cheese base",
    veggie: true,
    price: 0.69,
  },
  { name: "No Mozzarella", category: "Cheese base", veggie: true, price: 2.0 },
  { name: "Tomato sauce", category: "Sauce base", veggie: true, extra: true, price: 1.39 },
  { name: "Milk cream", category: "Sauce base", veggie: false, extra: true, price: 1.39 },
  { name: "White sauce", category: "Sauce base", veggie: false, extra: true, price: 1.39 },
  { name: "No sauce", category: "Sauce base", veggie: true, extra:false, price: 1.39 },
  { name: "Gluten-Free", category: "Dough", veggie: true, extra:false, price: 1.2 },
  { name: "Wholemeal flour", category: "Dough", veggie: true, extra:false,price: 1.2 },
  { name: "Wheat flour", category: "Dough", veggie: true, extra:false, price: 1.2 },
  { name: "Thin", category: "Type", veggie: null,  extra:false, price: 1.2 },
  { name: "Gross", category: "Type", veggie: null,  extra:false, price: 1.2 },
  {
    name: "Tomatoes",
    price: 1.99,
    category: "Toppings",
    extra: false,
    veggie: true,
  },
  {
    name: "Lomo",
    price: 1.99,
    category: "Proteins",
    extra:false, 
    veggie: false,
  },
  {
    name: "Pineapple",
    price: 1.99,
    category: "Toppings",
    extra:true, 
    veggie: true,
  },
  {
    name: "Green Peppers",
    price: 1.49,
    category: "Toppings",
    extra:true, 
    veggie: true,
  },
  {
    name: "Onions",
    price: 0.99,
    category: "Toppings",
    extra:true, 
    veggie: true,
  },
  {
    name: "Mushrooms",
    price: 1.49,
    category: "Toppings",
    extra:true, 
    veggie: true,
  },
  {
    name: "Green Olives",
    price: 1.49,
    category: "Toppings",
    extra:true, 
    veggie: true,
  },
  {
    name: "Black Olives",
    price: 1.49,
    category: "Toppings",
    extra:true, 
    veggie: true,
  },
  {
    name: "Sausage",
    price: 2.49,
    category: "Meat",
    extra:true, 
    veggie: false,
  },
  {
    name: "Pepperoni",
    price: 1.99,
    category: "Meat",
    extra:true, 
    veggie: false,
  },
  {
    name: "Blue Cheese",
    price: 2.99,
    category: "Cheese",
    extra:true, 
    veggie: false,
  },
  {
    name: "Goat Cheese",
    price: 3.49,
    category: "Cheese",
    extra:true, 
    veggie: true,
  },
  {
    name: "Cheddar Cheese",
    price: 2.99,
    category: "Cheese",
    extra:true, 
    veggie: true,
  },
  {
    name: "Parmesan Cheese",
    price: 3.49,
    category: "Cheese",
    extra:true, 
    veggie: true,
  },
  {
    name: "Bacon",
    price: 2.49,
    category: "Meat",
    extra:true, 
    veggie: false,
  },
  {
    name: "Ham",
    price: 2.49,
    category: "Meat",
    extra:true, 
    veggie: false,
  },
  {
    name: "Anchovies",
    price: 3.49,
    category: "Meat",
    extra:true, 
    veggie: false,
  },
  {
    name: "Artichokes",
    price: 2.49,
    category: "Toppings",
    extra:false, 
    veggie: true,
  },
  {
    name: "Prosciutto",
    price: 3.49,
    category: "Toppings",
    extra:true, 
    veggie: false,
  },
  {
    name: "Salami",
    price: 2.49,
    category: "Toppings",
    extra:true, 
    veggie: false,
  },
  {
    name: "Canadian Bacon",
    price: 2.49,
    category: "Toppings",
    extra:false, 
    veggie: false,
  },
  {
    name: "Chicken",
    price: 1.99,
    category: "Meat",
    extra:true, 
    veggie: false,
  },
  {
    name: "Shrimp",
    price: 2.99,
    category: "Toppings",
    extra:true, 
    veggie: false,
  },
  {
    name: "Tuna",
    price: 2.49,
    category: "Toppings",
    extra:true, 
    veggie: false,
  },
  {
    name: "Feta Cheese",
    price: 2.49,
    category: "Cheese",
    extra:true, 
    veggie: true,
  },
  {
    name: "Gouda Cheese",
    price: 2.99,
    category: "Cheese",
    extra:true, 
    veggie: true,
  },
  {
    name: "Ricotta Cheese",
    price: 1.99,
    category: "Cheese",
    extra:true, 
    veggie: true,
  },
  {
    name: "Smoked Mozzarella Cheese",
    price: 2.99,
    category: "Cheese",
    extra:true, 
    veggie: true,
  },
  {
    name: "Asiago Cheese",
    price: 2.99,
    category: "Cheese",
    extra:true, 
    veggie: true,
  },
  {
    name: "Fontina Cheese",
    price: 2.99,
    category: "Cheese",
    extra:true, 
    veggie: true,
  },
  {
    name: "Brie Cheese",
    price: 3.99,
    category: "Cheese",
    extra:true, 
    veggie: true,
  },
  {
    name: "Pepper Jack Cheese",
    price: 2.49,
    category: "Cheese",
    extra:true, 
    veggie: true,
  },
  {
    name: "Jalapenos",
    price: 0.99,
    category: "Toppings",
    extra:true, 
    veggie: true,
  },
  {
    name: "Banana Peppers",
    price: 0.99,
    category: "Toppings",
    extra:true, 
    veggie: true,
  },
  {
    name: "Basil",
    price: 0.89,
    category: "Toppings",
    extra:true, 
    veggie: true,
  },
  {
    name: "Bell peppers",
    price: 0.79,
    category: "Toppings",
    extra:false, 
    veggie: true,
  },
  {
    name: "Broccoli",
    price: 0.99,
    category: "Toppings",
    extra:false, 
    veggie: true,
  },
  {
    name: "Capers",
    price: 0.89,
    category: "Toppings",
    extra:false, 
    veggie: true,
  },
  {
    name: "Chorizo",
    price: 1.19,
    category: "Toppings",
    extra:true, 
    veggie: false,
  },
  {
    name: "Gorgonzola cheese",
    price: 0.99,
    category: "Cheese",
    extra:true, 
    veggie: false,
  },
  {
    name: "Mixed greens",
    price: 0.79,
    category: "Toppings",
    extra:false, 
    veggie: true,
  },
  {
    name: "Mustard greens",
    price: 0.89,
    category: "Toppings",
    extra:false, 
    veggie: true,
  },
  {
    name: "Nutritional yeast",
    price: 0.99,
    category: "Toppings",
    extra:false, 
    veggie: true,
  },
  {
    name: "Poblano peppers",
    price: 0.89,
    category: "Toppings",
    extra:true, 
    veggie: true,
  },
  {
    name: "Roasted red peppers",
    price: 0.89,
    category: "Toppings",
    extra:true, 
    veggie: true,
  },
  {
    name: "Scallions",
    price: 0.69,
    category: "Toppings",
    extra:true, 
    veggie: true,
  },
  {
    name: "Sweet corn",
    price: 0.79,
    category: "Toppings",
    extra:false, 
    veggie: true,
  },
  {
    name: "Thyme",
    price: 0.79,
    category: "Toppings",
    extra:false, 
    veggie: true,
  },
  {
    name: "Avocado",
    price: 1.29,
    category: "Toppings",
    extra:true,
    veggie: true,
  },
];
module.exports = ingredients;
