const itemList = [
  {
    name: "Margherita",
    price: 10.99,
    image: "https://i.postimg.cc/J4qsjrzR/margherita.png",
    vegetarian: true,
    // userId: null,
    detail: {
      dough: "wholemeal flour",
      type: "gross",
      base: "milk cream",
      mozzarella: "vegan mozarella",
      toppingIngredients: ["Pineapple", "Mushrooms"],
      cheeseIngredients: [
        "Fontina Cheese",
        "Asiago Cheese",
        "Smoked Mozzarella Cheese",
      ],
      meatIngredients: ["Meatballs", "Pepperoni", "Bacon"],
    },
    category: "pizza",
  },
  {
    name: "Pepperoni",
    price: 12.99,
    image: "https://i.postimg.cc/cLLrmpvw/pepperoni.png",
    vegetarian: false,
    // userId: null,
    detail: {
      dough: "wholemeal flour",
      type: "gross",
      base: "milk cream",
      mozzarella: "vegan mozarella",
      toppingIngredients: ["Pineapple", "Mushrooms"],
      cheeseIngredients: [
        "Fontina Cheese",
        "Asiago Cheese",
        "Smoked Mozzarella Cheese",
      ],
      meatIngredients: ["Meatballs", "Pepperoni", "Bacon"],
    },
    category: "pizza",
  },
  {
    name: "Meat lovers",
    price: 14.99,
    image: "https://i.postimg.cc/0yXrHVS3/meat-lovers.png",
    vegetarian: false,
    // userId: null,
    detail: {
      dough: "wholemeal flour",
      type: "gross",
      base: "milk cream",
      mozzarella: "vegan mozarella",
      toppingIngredients: ["Pineapple", "Mushrooms"],
      cheeseIngredients: [
        "Fontina Cheese",
        "Asiago Cheese",
        "Smoked Mozzarella Cheese",
      ],
      meatIngredients: ["Meatballs", "Pepperoni", "Bacon"],
    },
    category: "pizza",
  },
  {
    name: "Hawaiian",
    price: 12.99,
    image: "https://i.postimg.cc/h4VzPbFz/Hawaiian.png",
    vegetarian: false,
    // userId: null,
    detail: {
      dough: "wholemeal flour",
      type: "gross",
      base: "milk cream",
      mozzarella: "vegan mozarella",
      toppingIngredients: ["Pineapple", "Mushrooms"],
      cheeseIngredients: [
        "Fontina Cheese",
        "Asiago Cheese",
        "Smoked Mozzarella Cheese",
      ],
      meatIngredients: ["Meatballs", "Pepperoni", "Bacon"],
    },
    category: "pizza",
  },
  {
    name: "BBQ chicken",
    price: 13.99,
    image: "https://i.postimg.cc/WbjDDFj9/BBQ-chicken.png",
    vegetarian: false,
    // userId: null,
    detail: {
      dough: "wholemeal flour",
      type: "gross",
      base: "milk cream",
      mozzarella: "vegan mozarella",
      toppingIngredients: ["Pineapple", "Mushrooms"],
      cheeseIngredients: [
        "Fontina Cheese",
        "Asiago Cheese",
        "Smoked Mozzarella Cheese",
      ],
      meatIngredients: ["Meatballs", "Pepperoni", "Bacon"],
    },
    category: "pizza",
  },
  {
    name: "Veggie",
    price: 12.99,
    image: "https://i.postimg.cc/fy7J2Z7j/veggie.png",
    vegetarian: true,
    // userId: null,
    detail: {
      dough: "wholemeal flour",
      type: "gross",
      base: "milk cream",
      mozzarella: "vegan mozarella",
      toppingIngredients: ["Pineapple", "Mushrooms"],
      cheeseIngredients: [
        "Fontina Cheese",
        "Asiago Cheese",
        "Smoked Mozzarella Cheese",
      ],
      meatIngredients: ["Meatballs", "Pepperoni", "Bacon"],
    },
    category: "pizza",
  },
  {
    name: "Four-cheese",
    price: 11.99,
    image: "https://i.postimg.cc/TPHmgRQK/four-cheese.png",
    vegetarian: true,
    // userId: null,
    detail: {
      dough: "wholemeal flour",
      type: "gross",
      base: "milk cream",
      mozzarella: "vegan mozarella",
      toppingIngredients: ["Pineapple", "Mushrooms"],
      cheeseIngredients: [
        "Fontina Cheese",
        "Asiago Cheese",
        "Smoked Mozzarella Cheese",
      ],
      meatIngredients: ["Meatballs", "Pepperoni", "Bacon"],
    },
    category: "pizza",
  },
  {
    name: "Greek",
    price: 12.99,
    image: "https://i.postimg.cc/Mpqy83vp/greek.png",
    vegetarian: true,
    // userId: null,
    detail: {
      dough: "wholemeal flour",
      type: "gross",
      base: "milk cream",
      mozzarella: "vegan mozarella",
      toppingIngredients: ["Pineapple", "Mushrooms"],
      cheeseIngredients: [
        "Fontina Cheese",
        "Asiago Cheese",
        "Smoked Mozzarella Cheese",
      ],
      meatIngredients: ["Meatballs", "Pepperoni", "Bacon"],
    },
    category: "pizza",
  },
  {
    name: "Buffalo chicken",
    price: 13.99,
    image: "https://i.postimg.cc/PfDZvnDq/buffalo-chicken.png",
    vegetarian: false,
    // userId: null,
    detail: {
      dough: "wholemeal flour",
      type: "gross",
      base: "milk cream",
      mozzarella: "vegan mozarella",
      toppingIngredients: ["Pineapple", "Mushrooms"],
      cheeseIngredients: [
        "Fontina Cheese",
        "Asiago Cheese",
        "Smoked Mozzarella Cheese",
      ],
      meatIngredients: ["Meatballs", "Pepperoni", "Bacon"],
    },
    category: "pizza",
  },
  {
    name: "Mushroom",
    price: 12.99,
    image: "https://i.postimg.cc/ZRGdsVGZ/mushroom.png",
    vegetarian: true,
    // userId: null,
    detail: {
      dough: "wholemeal flour",
      type: "gross",
      base: "milk cream",
      mozzarella: "vegan mozarella",
      toppingIngredients: ["Pineapple", "Mushrooms"],
      cheeseIngredients: [
        "Fontina Cheese",
        "Asiago Cheese",
        "Smoked Mozzarella Cheese",
      ],
      meatIngredients: ["Meatballs", "Pepperoni", "Bacon"],
    },
    category: "pizza",
  },
  {
    name: "Spinach and feta",
    price: 12.99,
    image: "https://i.postimg.cc/hjzm0H3p/Spinach-and-feta.png",
    vegetarian: true,
    // userId: null,
    detail: {
      dough: "wholemeal flour",
      type: "gross",
      base: "milk cream",
      mozzarella: "vegan mozarella",
      toppingIngredients: ["Pineapple", "Mushrooms"],
      cheeseIngredients: [
        "Fontina Cheese",
        "Asiago Cheese",
        "Smoked Mozzarella Cheese",
      ],
      meatIngredients: ["Meatballs", "Pepperoni", "Bacon"],
    },
    category: "pizza",
  },
  {
    name: "Pesto",
    price: 12.99,
    image: "https://i.postimg.cc/qM88SHBF/Pesto.png",
    vegetarian: true,
    // userId: null,
    detail: {
      dough: "wholemeal flour",
      type: "gross",
      base: "milk cream",
      mozzarella: "vegan mozarella",
      toppingIngredients: ["Pineapple", "Mushrooms"],
      cheeseIngredients: [
        "Fontina Cheese",
        "Asiago Cheese",
        "Smoked Mozzarella Cheese",
      ],
      meatIngredients: ["Meatballs", "Pepperoni", "Bacon"],
    },
    category: "pizza",
  },
  {
    name: "Sausage and mushroom",
    price: 13.99,
    image: "https://i.postimg.cc/Gh0FXmRY/Sausage-and-mushroom.png",
    vegetarian: false,
    // userId: null,
    detail: {
      dough: "wholemeal flour",
      type: "gross",
      base: "milk cream",
      mozzarella: "vegan mozarella",
      toppingIngredients: ["Pineapple", "Mushrooms"],
      cheeseIngredients: [
        "Fontina Cheese",
        "Asiago Cheese",
        "Smoked Mozzarella Cheese",
      ],
      meatIngredients: ["Meatballs", "Pepperoni", "Bacon"],
    },
    category: "pizza",
  },
  {
    name: "Philly cheesesteak",
    price: 14.99,
    image: "https://i.postimg.cc/rppxDdG6/Philly-cheesesteak.png",
    vegetarian: false,
    // userId: null,
    detail: {
      dough: "wholemeal flour",
      type: "gross",
      base: "milk cream",
      mozzarella: "vegan mozarella",
      toppingIngredients: ["Pineapple", "Mushrooms"],
      cheeseIngredients: [
        "Fontina Cheese",
        "Asiago Cheese",
        "Smoked Mozzarella Cheese",
      ],
      meatIngredients: ["Meatballs", "Pepperoni", "Bacon"],
    },
    category: "pizza",
  },
  {
    name: "Seafood",
    price: 15.99,
    image: "https://i.postimg.cc/PJQBVFC8/Seafood.png",
    vegetarian: false,
    // userId: null,
    detail: {
      dough: "wholemeal flour",
      type: "gross",
      base: "milk cream",
      mozzarella: "vegan mozarella",
      toppingIngredients: ["Pineapple", "Mushrooms"],
      cheeseIngredients: [
        "Fontina Cheese",
        "Asiago Cheese",
        "Smoked Mozzarella Cheese",
      ],
      meatIngredients: ["Meatballs", "Pepperoni", "Bacon"],
    },
    category: "pizza",
  },
  {
    name: "Roasted garlic and tomato pizza",
    price: 10.99,
    image: "https://i.postimg.cc/pdgbmjNy/Roasted-garlic-and-tomato-pizza.png",
    vegetarian: true,
    // userId: null,
    detail: {
      dough: "wholemeal flour",
      type: "gross",
      base: "milk cream",
      mozzarella: "vegan mozarella",
      toppingIngredients: ["Pineapple", "Mushrooms"],
      cheeseIngredients: [
        "Fontina Cheese",
        "Asiago Cheese",
        "Smoked Mozzarella Cheese",
      ],
      meatIngredients: ["Meatballs", "Pepperoni", "Bacon"],
    },
    category: "pizza",
  },
  {
    name: "Bacon and egg pizza",
    price: 12.99,
    image: "https://i.postimg.cc/ZRpkpqZH/Bacon-and-egg-pizza.png",
    vegetarian: false,
    // userId: null,
    detail: {
      dough: "wholemeal flour",
      type: "gross",
      base: "milk cream",
      mozzarella: "vegan mozarella",
      toppingIngredients: ["Pineapple", "Mushrooms"],
      cheeseIngredients: [
        "Fontina Cheese",
        "Asiago Cheese",
        "Smoked Mozzarella Cheese",
      ],
      meatIngredients: ["Meatballs", "Pepperoni", "Bacon"],
    },
    category: "pizza",
  },
  {
    name: "Prosciutto and arugula pizza",
    price: 11.99,
    image: "https://i.postimg.cc/x11ShYyj/Prosciutto-and-arugula-pizza.png",
    vegetarian: false,
    // userId: null,
    detail: {
      dough: "wholemeal flour",
      type: "gross",
      base: "milk cream",
      mozzarella: "vegan mozarella",
      toppingIngredients: ["Pineapple", "Mushrooms"],
      cheeseIngredients: [
        "Fontina Cheese",
        "Asiago Cheese",
        "Smoked Mozzarella Cheese",
      ],
      meatIngredients: ["Meatballs", "Pepperoni", "Bacon"],
    },
    category: "pizza",
  },
  {
    name: "Artichoke and goat cheese pizza",
    price: 13.99,
    image: "https://i.postimg.cc/sDyzP5Mh/Artichoke-and-goat-cheese-pizza.png",
    vegetarian: true,
    // userId: null,
    detail: {
      dough: "wholemeal flour",
      type: "gross",
      base: "milk cream",
      mozzarella: "vegan mozarella",
      toppingIngredients: ["Pineapple", "Mushrooms"],
      cheeseIngredients: [
        "Fontina Cheese",
        "Asiago Cheese",
        "Smoked Mozzarella Cheese",
      ],
      meatIngredients: ["Meatballs", "Pepperoni", "Bacon"],
    },
    category: "pizza",
  },
  {
    name: "Caramelized onion and bacon pizza",
    price: 10.99,
    image:
      "https://i.postimg.cc/C5CgTxQ5/Caramelized-onion-and-bacon-pizza.png",
    vegetarian: false,
    // userId: null,
    detail: {
      dough: "wholemeal flour",
      type: "gross",
      base: "milk cream",
      mozzarella: "vegan mozarella",
      toppingIngredients: ["Pineapple", "Mushrooms"],
      cheeseIngredients: [
        "Fontina Cheese",
        "Asiago Cheese",
        "Smoked Mozzarella Cheese",
      ],
      meatIngredients: ["Meatballs", "Pepperoni", "Bacon"],
    },
    category: "pizza",
  },
  {
    name: "Roasted Vegetable Pizza",
    price: 12.99,
    image: "https://i.postimg.cc/3wyQrBcP/Roasted-Vegetable-Pizza.png",
    vegetarian: true,
    // userId: null,
    detail: {
      dough: "wholemeal flour",
      type: "gross",
      base: "milk cream",
      mozzarella: "vegan mozarella",
      toppingIngredients: ["Pineapple", "Mushrooms"],
      cheeseIngredients: [
        "Fontina Cheese",
        "Asiago Cheese",
        "Smoked Mozzarella Cheese",
      ],
      meatIngredients: ["Meatballs", "Pepperoni", "Bacon"],
    },
    category: "pizza",
  },
  {
    name: "Chicken and Broccoli Alfredo Pizza",
    price: 14.99,
    image:
      "https://i.postimg.cc/wxDHsw-jz/Chicken-and-Broccoli-Alfredo-Pizza.png",
    vegetarian: false,
    // userId: null,
    detail: {
      dough: "wholemeal flour",
      type: "gross",
      base: "milk cream",
      mozzarella: "vegan mozarella",
      toppingIngredients: ["Pineapple", "Mushrooms"],
      cheeseIngredients: [
        "Fontina Cheese",
        "Asiago Cheese",
        "Smoked Mozzarella Cheese",
      ],
      meatIngredients: ["Meatballs", "Pepperoni", "Bacon"],
    },
    category: "pizza",
  },
  {
    name: "Mac and Cheese Pizza",
    price: 11.99,
    image: "https://i.postimg.cc/DyqZn2Xq/Mac-and-Cheese-Pizza.png",
    vegetarian: true,
    // userId: null,
    detail: {
      dough: "wholemeal flour",
      type: "gross",
      base: "milk cream",
      mozzarella: "vegan mozarella",
      toppingIngredients: ["Pineapple", "Mushrooms"],
      cheeseIngredients: [
        "Fontina Cheese",
        "Asiago Cheese",
        "Smoked Mozzarella Cheese",
      ],
      meatIngredients: ["Meatballs", "Pepperoni", "Bacon"],
    },
    category: "pizza",
  },
  {
    name: "Steak and Blue Cheese Pizza",
    price: 16.99,
    image: "https://i.postimg.cc/y8sNNwm2/Steak-and-Blue-Cheese-Pizza.png",
    vegetarian: false,
    // userId: null,
    detail: {
      dough: "wholemeal flour",
      type: "gross",
      base: "milk cream",
      mozzarella: "vegan mozarella",
      toppingIngredients: ["Pineapple", "Mushrooms"],
      cheeseIngredients: [
        "Fontina Cheese",
        "Asiago Cheese",
        "Smoked Mozzarella Cheese",
      ],
      meatIngredients: ["Meatballs", "Pepperoni", "Bacon"],
    },
    category: "pizza",
  },
  {
    name: "Shrimp Scampi Pizza",
    price: 15.99,
    image: "https://i.postimg.cc/WzZ4DVfc/Shrimp-Scampi-Pizza.png",
    vegetarian: false,
    // userId: null,
    detail: {
      dough: "wholemeal flour",
      type: "gross",
      base: "milk cream",
      mozzarella: "vegan mozarella",
      toppingIngredients: ["Pineapple", "Mushrooms"],
      cheeseIngredients: [
        "Fontina Cheese",
        "Asiago Cheese",
        "Smoked Mozzarella Cheese",
      ],
      meatIngredients: ["Meatballs", "Pepperoni", "Bacon"],
    },
    category: "pizza",
  },
  {
    name: "Chicken Caesar Salad Pizza",
    price: 13.99,
    image: "https://i.postimg.cc/L4g5Qk4Q/Chicken-Caesar-Salad-Pizza.png",
    vegetarian: false,
    // userId: null,
    detail: {
      dough: "wholemeal flour",
      type: "gross",
      base: "milk cream",
      mozzarella: "vegan mozarella",
      toppingIngredients: ["Pineapple", "Mushrooms"],
      cheeseIngredients: [
        "Fontina Cheese",
        "Asiago Cheese",
        "Smoked Mozzarella Cheese",
      ],
      meatIngredients: ["Meatballs", "Pepperoni", "Bacon"],
    },
    category: "pizza",
  },
  {
    name: "Green Olive and Sausage Pizza",
    price: 14.99,
    image: "https://i.postimg.cc/DZJvDFh4/Green-Olive-and-Sausage-Pizza.png",
    vegetarian: false,
    // userId: null,
    detail: {
      dough: "wholemeal flour",
      type: "gross",
      base: "milk cream",
      mozzarella: "vegan mozarella",
      toppingIngredients: ["Pineapple", "Mushrooms"],
      cheeseIngredients: [
        "Fontina Cheese",
        "Asiago Cheese",
        "Smoked Mozzarella Cheese",
      ],
      meatIngredients: ["Meatballs", "Pepperoni", "Bacon"],
    },
    category: "pizza",
  },
  {
    name: "Ricotta and Basil Pizza",
    price: 12.99,
    image: "https://i.postimg.cc/g00kV8BD/Ricotta-and-basil.png",
    vegetarian: true,
    // userId: null,
    detail: {
      dough: "wholemeal flour",
      type: "gross",
      base: "milk cream",
      mozzarella: "vegan mozarella",
      toppingIngredients: ["Pineapple", "Mushrooms"],
      cheeseIngredients: [
        "Fontina Cheese",
        "Asiago Cheese",
        "Smoked Mozzarella Cheese",
      ],
      meatIngredients: ["Meatballs", "Pepperoni", "Bacon"],
    },
    category: "pizza",
  },
  {
    name: "Barbecue Bacon Cheeseburger Pizza",
    price: 16.99,
    image:
      "https://i.postimg.cc/y8j83vnx/Barbecue-Bacon-Cheeseburger-Pizza.png",
    vegetarian: false,
    // userId: null,
    detail: {
      dough: "wholemeal flour",
      type: "gross",
      base: "milk cream",
      mozzarella: "vegan mozarella",
      toppingIngredients: ["Pineapple", "Mushrooms"],
      cheeseIngredients: [
        "Fontina Cheese",
        "Asiago Cheese",
        "Smoked Mozzarella Cheese",
      ],
      meatIngredients: ["Meatballs", "Pepperoni", "Bacon"],
    },
    category: "pizza",
  },
  {
    name: "Tuna and Red Onion Pizza",
    price: 15.99,
    image: "https://i.postimg.cc/MKkTCcv6/Tuna-and-red-onion.png",
    vegetarian: false,
    // userId: null,
    detail: {
      dough: "wholemeal flour",
      type: "gross",
      base: "milk cream",
      mozzarella: "vegan mozarella",
      toppingIngredients: ["Pineapple", "Mushrooms"],
      cheeseIngredients: [
        "Fontina Cheese",
        "Asiago Cheese",
        "Smoked Mozzarella Cheese",
      ],
      meatIngredients: ["Meatballs", "Pepperoni", "Bacon"],
    },
    category: "pizza",
  },
  {
    name: "Supreme",
    price: 14.99,
    image: "https://napolipizzalv.com/wp-content/uploads/2019/10/DSC_0905-min.png",
    vegetarian: false,
    // userId: null,
    detail: {
      dough: "wholemeal flour",
      type: "gross",
      base: "milk cream",
      mozzarella: "vegan mozarella",
      toppingIngredients: ["Pineapple", "Mushrooms"],
      cheeseIngredients: [
        "Fontina Cheese",
        "Asiago Cheese",
        "Smoked Mozzarella Cheese",
      ],
      meatIngredients: ["Meatballs", "Pepperoni", "Bacon"],
    },
    category: "pizza",
  },
  {
    name: "Coca-Cola",
    image: "https://i.postimg.cc/Z5y4bZQh/cocacola.png",
    price: 1.22,
    detail: {},
    category: "drinks",
  },
  {
    name: "Diet Coke",
    image: "https://i.postimg.cc/V6z8WtkY/dietcoke.png",
    price: 1.40,
    detail: {},
    category: "drinks",
  },
  {
    name: "Fanta",
    image: "https://i.postimg.cc/CKTYdXyn/fanta.png",
    price: 1.22,
    detail: {},
    category: "drinks",
  },
  {
    name: "Sprite",
    image: "https://i.postimg.cc/cHTN9Jvf/sprite.png",
    price: 1.22,
    detail: {},
    category: "drinks",
  },
  {
    name: "Water",
    image: "https://i.postimg.cc/rFHq2zQJ/agua.png",
    price: 1.15,
    detail: {},
    category: "drinks",
  },
  {
    name: "Strawberry Fanta",
    image: "https://i.postimg.cc/yxdCwzRt/redfanta.png",
    price: 1.22,
    detail: {},
    category: "drinks",
  },
  {
    name: "RockStar Orange",
    image: "https://i.postimg.cc/436GcPZL/rockstarorange.png",
    price: 1.50,
    detail: {},
    category: "drinks",
  },
  {
    name: "Splash Lemonade",
    image: "https://i.postimg.cc/SsMh6Y3s/lemonade.png",
    price: 1.33,
    detail: {},
    category: "drinks",
  },

  {
    name: "Vitamin Water",
    image: "https://i.postimg.cc/FzPXmbJT/gatorade.png",
    price: 2.50,
    detail: {},
    category: "drinks",
  },
  {
    name: "Cookie dough brownie made with M&M’S minis chocolate candies",
    image: "https://i.postimg.cc/vmthsH5K/brownie2.jpg",
    price: 3.99,
    description: {},
    detail: {
      calories: 300,
      fat: 15,
      carbs: 40,
      protein: 5
    },
    category: "sides"
  },
  {
    name: "Cookie dough brownie made with TWIX cookie bar pieces",
    image: "https://i.postimg.cc/fRf0CM1W/brownie3.jpg",
    price: 3.99,
    description: {},
    detail: {
      calories: 250,
      fat: 10,
      carbs: 35,
      protein: 3
    },
    category: "sides"
  },

  // Ejemplo 1: Cheesecake de fresa
  // {
  //   name: "Cheesecake de fresa",
  //   image: "ruta/de/la/imagen",
  //   price: 4.50,
  //   description: {},
  //   detail: {
  //     calories: 400,
  //     fat: 25,
  //     carbs: 45,
  //     protein: 8
  //   },
  //   category: "sides"
  // },

  // Ejemplo 2: Tarta de manzana
  // {
  //   name: "Tarta de manzana",
  //   image: "ruta/de/la/imagen",
  //   price: 3.75,
  //   description: {},
  //   detail: {
  //     calories: 350,
  //     fat: 20,
  //     carbs: 40,
  //     protein: 6
  //   },
  //   category: "sides"
  // },

  // Ejemplo 3: Flan de vainilla
  // {
  //   name: "Flan de vainilla",
  //   image: "ruta/de/la/imagen",
  //   price: 3.00,
  //   description: {},
  //   detail: {
  //     calories: 200,
  //     fat: 8,
  //     carbs: 30,
  //     protein: 4
  //   },
  //   category: "sides"
  // },
  {
    name: "Mix2Pizza WINGS – Oven roasted",
    image: "https://i.postimg.cc/CKS0Sgv2/wings-oven-roasted.jpg",
    price: 7.99,
    description: {},
    detail: {
      calories: 510,
      fat: 35,
      carbs: 3,
      protein: 47
    },
    category: "sides"
  },
  {
    name: "Mix2Pizza WINGS – BBQ",
    image: "https://i.postimg.cc/G2pH3YM6/WINGS-BBQ.jpg",
    price: 7.99,
    description: {},
    detail: {
      calories: 630,
      fat: 35,
      carbs: 32,
      protein: 48
    },
    category: "sides"
  },
  {
    name: "Mix2Pizza WINGS – Garlic parmesan",
    image: "https://i.postimg.cc/3xtMKydD/wings-parmesan-2.jpg",
    price: 7.99,
    description: {},
    detail: {
      calories: 660,
      fat: 49,
      carbs: 7,
      protein: 49
    },
    category: "sides"
  },
  {
    name: "Mix2Pizza DIPS - Crazy sauce",
    image: "https://i.postimg.cc/zB0jcnMB/crazy-sauce.jpg",
    price: 0.99,
    description: {},
    detail: {
      calories: 30,
      fat: 0,
      carbs: 7,
      protein: 1
    },
    category: "sides"
  },
  {
    name: "Mix2Pizza DIPS - Butter garlic flavor",
    image: "https://i.postimg.cc/t4nV0h1T/caesar-dip-sauce.jpg",
    price: 0.75,
    description: {},
    detail: {
      calories: 370,
      fat: 42,
      carbs: 0,
      protein: 0
    },
    category: "sides"
  },
  {
    name: "Mix2Pizza DIPS - Buffalo ranch",
    image: "https://i.postimg.cc/43JZvGTg/caesar-dip-buffalo.jpg",
    price: 0.75,
    description: {},
    detail: {
      calories: 230,
      fat: 24,
      carbs: 3,
      protein: 2
    },
    category: "sides"
  },
  {
    name: "Mix2Pizza DIPS - Cheezy jalapeño",
    image: "https://i.postimg.cc/9MDfT2Gf/caesar-dip-jalapeno.jpg",
    price: 0.75,
    description: {},
    detail: {
      calories: 220,
      fat: 22,
      carbs: 3,
      protein: 1
    },
    category: "sides"
  },
  {
    name: "Mix2Pizza DIPS - Ranch",
    image: "https://i.postimg.cc/zfJby4tL/ranch.jpg",
    price: 0.75,
    description: {},
    detail: {
      calories: 240,
      fat: 24,
      carbs: 4,
      protein: 2
    },
    category: "sides"
  }


];

module.exports = itemList;
