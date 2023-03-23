const itemList = [
  {
    name: "Margherita",
    price: 10.99,
    image: "https://i.postimg.cc/J4qsjrzR/margherita.png",
    detail: {
      meatOrVegetarian: 'vegetarian',
      dough: "Wheat flour",
      type: "Thin",
      base: "Tomato sauce",
      mozzarella: "Mozzarella",
      toppingIngredients: ["Tomatoes"],
      cheeseIngredients: ["Parmesan Cheese"],
      meatIngredients: [],
    },
    category: "pizza",
    rating: 3,
    stock: 0,
    active:false
  },
  {
    name: "Pepperoni",
    price: 12.99,
    image: "https://i.postimg.cc/cLLrmpvw/pepperoni.png",
    detail: {
      meatOrVegetarian: 'meat',
      dough: "Wheat flour",
      type: "Thin",
      base: "Tomato sauce",
      mozzarella: "Mozzarella",
      toppingIngredients: ["Salami"],
      cheeseIngredients: ["Parmesan Cheese"],
      meatIngredients: ["Pepperoni"],
    },
    category: "pizza",
    rating: 3,
    stock: 0,
    active:false
  },
  {
    name: "Meat lovers",
    price: 14.99,
    image: "https://i.postimg.cc/0yXrHVS3/meat-lovers.png",
    detail: {
      meatOrVegetarian: 'meat',
      dough: "Wheat flour",
      type: "Thin",
      base: "Tomato sauce",
      mozzarella: "Mozzarella",
      toppingIngredients: ["Salami"],
      cheeseIngredients: [],
      meatIngredients: ["Beef", "Bacon", "Pepperoni"],
    },
    category: "pizza",
    rating: 3,
    stock: 0,
    active:false
  },
  {
    name: "Hawaiian",
    price: 12.99,
    image: "https://i.postimg.cc/h4VzPbFz/Hawaiian.png",
    detail: {
      meatOrVegetarian: 'meat',
      dough: "Wheat flour",
      type: "Gross",
      base: "Tomato sauce",
      mozzarella: "Mozzarella",
      toppingIngredients: ["Pineapple"],
      cheeseIngredients: ["Feta Cheese"],
      meatIngredients: ["Ham"],
    },
    category: "pizza",
    rating: 3,
    stock: 0,
    active:false
  },
  {
    name: "BBQ chicken",
    price: 13.99,
    image: "https://i.postimg.cc/WbjDDFj9/BBQ-chicken.png",
    detail: {
      meatOrVegetarian: 'meat',
      dough: "Wheat flour",
      type: "Gross",
      base: "Tomato sauce",
      mozzarella: "Mozzarella",
      toppingIngredients: ["Bell peppers"],
      cheeseIngredients: ["Smoked Mozzarella Cheese"],
      meatIngredients: ["Chicken", "Bacon"],
    },
    category: "pizza",
    rating: 3,
    stock: 0,
    active:false
  },
  {
    name: "Veggie",
    price: 12.99,
    image: "https://i.postimg.cc/fy7J2Z7j/veggie.png",
    detail: {
      meatOrVegetarian: 'vegetarian',
      dough: "Wheat flour",
      type: "gross",
      base: "Tomato sauce",
      mozzarella: "Mozzarella",
      toppingIngredients: ["Onions", "Mushrooms"],
      cheeseIngredients: ["Parmesan Cheese"],
      meatIngredients: [],
    },
    category: "pizza",
    rating: 3,
    stock: 0,
    active:false
  },
  {
    name: "Four-cheese",
    price: 11.99,
    image: "https://i.postimg.cc/TPHmgRQK/four-cheese.png",
    detail: {
      meatOrVegetarian: 'vegetarian',
      dough: "Wheat flour",
      type: "Gross",
      base: "Tomato sauce",
      mozzarella: "Mozzarella",
      toppingIngredients: ["Pineapple", "Mushrooms"],
      cheeseIngredients: ["Cheddar Cheese", "Fontina Cheese", "Blue Cheese", "Parmesan Cheese"],
      meatIngredients: [],
    },
    category: "pizza",
    rating: 3,
    stock: 0,
    active:false
  },
  {
    name: "Greek",
    price: 12.99,
    image: "https://i.postimg.cc/Mpqy83vp/greek.png",
    detail: {
      meatOrVegetarian: 'vegetarian',
      dough: "Wheat flour",
      type: "Gross",
      base: "No sauce",
      mozzarella: "Mozzarella",
      toppingIngredients: ["Spinach", "Black Olives"],
      cheeseIngredients: ["Feta Cheese"],
      meatIngredients: [],
    },
    category: "pizza",
    rating: 3,
    stock: 0,
    active:false
  },
  {
    name: "Buffalo chicken",
    price: 13.99,
    image: "https://i.postimg.cc/PfDZvnDq/buffalo-chicken.png",
    detail: {
      meatOrVegetarian: 'meat',
      dough: "Wheat flour",
      type: "Gross",
      base: "Tomato Sauce",
      mozzarella: "Mozzarella",
      toppingIngredients: ["Onions"],
      cheeseIngredients: ["Cheddar Cheese", "Provolone"],
      meatIngredients: ["Chicken"],
    },
    category: "pizza",
    rating: 3,
    stock: 0,
    active:false
  },
  {
    name: "Mushroom",
    price: 12.99,
    image: "https://i.postimg.cc/ZRGdsVGZ/mushroom.png",
    detail: {
      meatOrVegetarian: 'vegetarian',
      dough: "Wheat flour",
      type: "Thin",
      base: "Tomato Sauce",
      mozzarella: "Mozzarella",
      toppingIngredients: ["Onions", "Mushrooms"],
      cheeseIngredients: ["Gouda Cheese"],
      meatIngredients: [],
    },
    category: "pizza",
    rating: 3,
    stock: 0,
    active:false
  },
  {
    name: "Spinach and feta",
    price: 12.99,
    image: "https://i.postimg.cc/hjzm0H3p/Spinach-and-feta.png",
    detail: {
      meatOrVegetarian: 'vegetarian',
      dough: "Wheat flour",
      type: "Gross",
      base: "Milk cream",
      mozzarella: "Mozzarella",
      toppingIngredients: ["Spinach"],
      cheeseIngredients: ["Parmesan Cheese"],
      meatIngredients: [],
    },
    category: "pizza",
    rating: 5,
    stock: 0,
    active:false
  },
  {
    name: "Pesto",
    price: 12.99,
    image: "https://i.postimg.cc/qM88SHBF/Pesto.png",
    detail: {
      meatOrVegetarian: 'vegetarian',
      dough: "Wheat flour",
      type: "Thin",
      base: "Tomato Sauce",
      mozzarella: "Mozzarella",
      toppingIngredients: ["Pesto", "Tomatoes"],
      cheeseIngredients: ["Parmesan Cheese"],
      meatIngredients: [],
    },
    category: "pizza",
    rating: 3,
    stock: 0,
    active:false
  },
  {
    name: "Sausage and mushroom",
    price: 13.99,
    image: "https://i.postimg.cc/Gh0FXmRY/Sausage-and-mushroom.png",
    detail: {
      meatOrVegetarian: 'meat',
      dough: "Wheat flour",
      type: "Thin",
      base: "Tomato Sauce",
      mozzarella: "Mozzarella",
      toppingIngredients: ["Mushrooms"],
      cheeseIngredients: ["Feta Cheese"],
      meatIngredients: ["Sausage"],
    },
    category: "pizza",
    rating: 3,
    stock: 0,
    active:false
  },
  {
    name: "Philly cheesesteak",
    price: 14.99,
    image: "https://i.postimg.cc/rppxDdG6/Philly-cheesesteak.png",
    detail: {
      meatOrVegetarian: 'meat',
      dough: "Wheat flour",
      type: "Thin",
      base: "Tomato Sauce",
      mozzarella: "Mozzarella",
      toppingIngredients: ["Onions", "Bell peppers", "Mushrooms", "Black Olives", "Green Olives"],
      cheeseIngredients: ["Feta Cheese"],
      meatIngredients: ["Steak"],
    },
    category: "pizza",
    rating: 3,
    stock: 0,
    active:false
  },
  {
    name: "Seafood",
    price: 15.99,
    image: "https://i.postimg.cc/PJQBVFC8/Seafood.png",
    detail: {
      meatOrVegetarian: 'meat',
      dough: "Wheat flour",
      type: "Gross",
      base: "Tomato Sauce",
      mozzarella: "Mozzarella",
      toppingIngredients: ["Black Olives", "Red Onions", "Bell peppers"],
      cheeseIngredients: ["Fontina Cheese", "Asiago Cheese"],
      meatIngredients: ["Shrimp"],
    },
    category: "pizza",
    rating: 3,
    stock: 1,
    active:true
  },
  {
    name: "Roasted garlic and tomato pizza",
    price: 10.99,
    image: "https://i.postimg.cc/pdgbmjNy/Roasted-garlic-and-tomato-pizza.png",
    detail: {
      meatOrVegetarian: 'vegetarian',
      dough: "Wheat flour",
      type: "Gross",
      base: "Tomato Sauce",
      mozzarella: "No Mozzarella",
      toppingIngredients: ["Tomatoes", "Garlic"],
      cheeseIngredients: ["Parmesan Cheese"],
      meatIngredients: [],
    },
    category: "pizza",
    rating: 3,
    stock: 1,
    active:true
  },
  {
    name: "Bacon and egg pizza",
    price: 12.99,
    image: "https://i.postimg.cc/ZRpkpqZH/Bacon-and-egg-pizza.png",
    detail: {
      meatOrVegetarian: 'meat',
      dough: "Wheat flour",
      type: "Gross",
      base: "Tomato Sauce",
      mozzarella: "Mozzarella",
      toppingIngredients: ["Fried Egg"],
      cheeseIngredients: ["Parmesan Cheese"],
      meatIngredients: ["Bacon"],
    },
    category: "pizza",
    rating: 3,
    stock: 1,
    active:true
  },
  {
    name: "Prosciutto and arugula pizza",
    price: 11.99,
    image: "https://i.postimg.cc/x11ShYyj/Prosciutto-and-arugula-pizza.png",
    detail: {
      meatOrVegetarian: 'meat',
      dough: "Wheat flour",
      type: "Gross",
      base: "Tomato Sauce",
      mozzarella: "Mozzarella",
      toppingIngredients: ["Arugula", "Black Olives"],
      cheeseIngredients: ["Parmesan Cheese"],
      meatIngredients: ["Ham"],
    },
    category: "pizza",
    rating: 3,
    stock: 1,
    active:true
  },
  {
    name: "Artichoke and goat cheese pizza",
    price: 13.99,
    image: "https://i.postimg.cc/sDyzP5Mh/Artichoke-and-goat-cheese-pizza.png",
    detail: {
      meatOrVegetarian: 'vegetarian',
      dough: "Wheat flour",
      type: "Gross",
      base: "Tomato Sauce",
      mozzarella: "Mozzarella",
      toppingIngredients: ["Artichokes", "Garlic"],
      cheeseIngredients: ["Goat Cheese"],
      meatIngredients: [],
    },
    category: "pizza",
    rating: 3,
    stock: 1,
    active:true
  },
  {
    name: "Caramelized onion and bacon pizza",
    price: 10.99,
    image:
      "https://i.postimg.cc/C5CgTxQ5/Caramelized-onion-and-bacon-pizza.png",
    detail: {
      meatOrVegetarian: 'meat',
      dough: "Wheat flour",
      type: "Gross",
      base: "Tomato Sauce",
      mozzarella: "Mozzarella",
      toppingIngredients: ["Onions"],
      cheeseIngredients: ["Parmesan Cheese"],
      meatIngredients: ["Bacon"],
    },
    category: "pizza",
    rating: 3,
    stock: 1,
    active:true
  },
  {
    name: "Roasted Vegetable Pizza",
    price: 12.99,
    image: "https://i.postimg.cc/3wyQrBcP/Roasted-Vegetable-Pizza.png",
    detail: {
      meatOrVegetarian: 'vegetarian',
      dough: "Wheat flour",
      type: "Thin",
      base: "Tomato Sauce",
      mozzarella: "Mozzarella",
      toppingIngredients: ["Bell peppers","Eggplant","Tomatoes","Sweet corn"],

      cheeseIngredients: [
        "Fontina Cheese",
        "Asiago Cheese",
      ],
      meatIngredients: [],
    },
    category: "pizza",
    rating: 3,
    stock: 1,
    active:true
  },
  {
    name: "Chicken and Broccoli Alfredo Pizza",
    price: 14.99,
    image:
      "https://i.postimg.cc/wxDHsw-jz/Chicken-and-Broccoli-Alfredo-Pizza.png",
    detail: {
      meatOrVegetarian: 'meat',
      dough: "Wheat flour",
      type: "Thin",
      base: "Tomato Sauce",
      mozzarella: "Mozzarella",
      toppingIngredients: ["Broccoli"],
      cheeseIngredients: [
        "Fontina Cheese",
        "Asiago Cheese",
        "Smoked Mozzarella Cheese",
      ],
      meatIngredients: ["Chicken"],
    },
    category: "pizza",
    rating: 3,
    stock: 1,
    active:true
  },
  {
    name: "Mac and Cheese Pizza",
    price: 11.99,
    image: "https://i.postimg.cc/DyqZn2Xq/Mac-and-Cheese-Pizza.png",
    detail: {
      meatOrVegetarian: 'vegetarian',
      dough: "Wheat flour",
      type: "Gross",
      base: "No sauce",
      mozzarella: "Mozzarella",
      toppingIngredients: ["Pineapple", "Mushrooms"],
      cheeseIngredients: [
        "Fontina Cheese",
        "Asiago Cheese",
      ],
      meatIngredients: ["Meatballs", "Pepperoni", "Bacon"],
    },
    category: "pizza",
    rating: 3,
    stock: 1,
    active:true
  },
  {
    name: "Steak and Blue Cheese Pizza",
    price: 16.99,
    image: "https://i.postimg.cc/y8sNNwm2/Steak-and-Blue-Cheese-Pizza.png",
    detail: {
      meatOrVegetarian: 'meat',
      dough: "Wheat flour",
      type: "Gross",
      base: "Tomato Sauce",
      mozzarella: "Mozzarella",
      toppingIngredients: ["Pineapple", "Mushrooms"],
      cheeseIngredients: [
        "Fontina Cheese",
        "Asiago Cheese",
        "Smoked Mozzarella Cheese",
      ],
      meatIngredients: ["Meatballs", "Pepperoni", "Bacon"],
    },
    category: "pizza",
    rating: 3,
    stock: 1,
    active:true
  },
  {
    name: "Shrimp Scampi Pizza",
    price: 15.99,
    image: "https://i.postimg.cc/WzZ4DVfc/Shrimp-Scampi-Pizza.png",
    detail: {
      meatOrVegetarian: 'meat',
      dough: "Wheat flour",
      type: "Gross",
      base: "Tomato Sauce",
      mozzarella: "Mozzarella",
      toppingIngredients: ["Shrimp","Tomatoes","Parsley","Garlic","Cucumber"],
      cheeseIngredients: ["Fontina Cheese","Asiago Cheese"],
      meatIngredients: [],
    },
    category: "pizza",
    rating: 3,
    stock: 1,
    active:true
  },
  {
    name: "Chicken Caesar Salad Pizza",
    price: 13.99,
    image: "https://i.postimg.cc/L4g5Qk4Q/Chicken-Caesar-Salad-Pizza.png",
    detail: {
      meatOrVegetarian: 'meat',
      dough: "Wheat flour",
      type: "Thin",
      base: "Tomato Sauce",
      mozzarella: "Mozzarella",
      toppingIngredients: ["Tomatoes", "Lettuce","Caesar sauce" ],
      cheeseIngredients: ["Parmesan Cheese","Gouda Cheese"],
      meatIngredients: ["Chicken"],
    },
    category: "pizza",
    rating: 3,
    stock: 1,
    active:true
  },
  {
    name: "Green Olive and Sausage Pizza",
    price: 14.99,
    image: "https://i.postimg.cc/DZJvDFh4/Green-Olive-and-Sausage-Pizza.png",
    detail: {
      meatOrVegetarian: 'meat',
      dough: "Wheat flour",
      type: "Gross",
      base: "Tomato Sauce",
      mozzarella: "Mozzarella",
      toppingIngredients: ["Green Olives","Black Olives","Oregano"],
      cheeseIngredients: ["Smoked Mozzarella Cheese"],
      meatIngredients: ["Sausage"],
    },
    category: "pizza",
    rating: 3,
    stock: 1,
    active:true
  },
  {
    name: "Ricotta and Basil Pizza",
    price: 12.99,
    image: "https://i.postimg.cc/g00kV8BD/Ricotta-and-basil.png",
    detail: {
      meatOrVegetarian: 'vegetarian',
      dough: "Wheat flour",
      type: "Gross",
      base: "Tomato Sauce",
      mozzarella: "Mozzarella",
      toppingIngredients: ["Basil", "Oregano","Parsley"],
      cheeseIngredients: ["Ricotta Cheese"],
      meatIngredients: [],
    },
    category: "pizza",
    rating: 3,
    stock: 1,
    active:true
  },
  {
    name: "Barbecue Bacon Cheeseburger Pizza",
    price: 16.99,
    image:
      "https://i.postimg.cc/y8j83vnx/Barbecue-Bacon-Cheeseburger-Pizza.png",
    detail: {
      meatOrVegetarian: 'meat',
      dough: "Wheat flour",
      type: "Gross",
      base: "Tomato Sauce",
      mozzarella: "Mozzarella",
      toppingIngredients: ["Pineapple", "Mushrooms"],
      cheeseIngredients: ["Cheddar Cheese" ],
      meatIngredients: ["Meatballs", "Beef", "Bacon"],
    },
    category: "pizza",
    rating: 3,
    stock: 1,
    active:true
  },
  {
    name: "Tuna and Red Onion Pizza",
    price: 15.99,
    image: "https://i.postimg.cc/MKkTCcv6/Tuna-and-red-onion.png",
    detail: {
      meatOrVegetarian: 'meat',
      dough: "Wheat flour",
      type: "Thin",
      base: "Tomato Sauce",
      mozzarella: "Mozzarella",
      toppingIngredients: ["Tuna","Red Onions"],
      cheeseIngredients: [ "Parmesan Cheese","Gouda Cheese"],
      meatIngredients: [],
    },
    category: "pizza",
    rating: 3,
    stock: 1,
    active:true
  },
  {
    name: "Supreme",
    price: 14.99,
    image:
      "https://napolipizzalv.com/wp-content/uploads/2019/10/DSC_0905-min.png",
    detail: {
      meatOrVegetarian: 'meat',
      dough: "Wheat flour",
      type: "Gross",
      base: "Tomato Sauce",
      mozzarella: "Mozzarella",
      toppingIngredients: ["Black Olives","Green Olives","Mushrooms","Onions"],
      cheeseIngredients: ["Fontina Cheese","Parmesan Cheese","Gouda Cheese"
      ],
      meatIngredients: ["Pepperoni", "Beef", "Ham", "Sausage" ],
    },
    category: "pizza",
    rating: 3,
    stock: 0,
    active:false
  },
  {
    name: "CocaCola 0.6 Lt",
    image: "https://i.postimg.cc/Z5y4bZQh/cocacola.png",
    price: 1.20,
    detail: { onSugar: "sugar", volumen: "600", description: "Soda. Pop. Soft drink. Sparkling beverage. Grab a Coca-Cola Original Taste, take a sip and find your “ahhh” moment. Enjoy Coca-Cola Original Taste." },
    category: "drinks",
    rating: 5,
    stock: 2,
    active:true
  },
  {
    name: "CocaCola 1.25 Lt",
    image: "https://i.postimg.cc/XYP2dGZH/cocacola125.png",
    price: 1.92,
    detail: { onSugar: "sugar", volumen: "1250", description: "Soda. Pop. Soft drink. Sparkling beverage. Grab a Coca-Cola Original Taste, take a sip and find your “ahhh” moment. Enjoy Coca-Cola Original Taste."},
    category: "drinks",
    rating: 4,
    stock: 0,
    active:false
  },
  {
    name: "CocaCola 2 Lt",
    image: "https://i.postimg.cc/KjC6zkDM/cocacola2lt.png",
    price: 3.05,
    detail: { onSugar: "sugar", volumen: "2000", description: "Soda. Pop. Soft drink. Sparkling beverage. Grab a Coca-Cola Original Taste, take a sip and find your “ahhh” moment. Enjoy Coca-Cola Original Taste." },
    category: "drinks",
    rating: 4,
    stock: 9,
    active:true
  },
  {
    name: "Diet Coke 0.6 Lt",
    image: "https://i.postimg.cc/V6z8WtkY/dietcoke.png",
    price: 1.30,
    detail: { onSugar: "nosugar", volumen: "600" , description: "This is the kind of sugar-free soda that you want throughout your day. Whether you’re looking for a tasty way start to your day or to refresh your afternoon, you'll never be lost with a Diet Coke.Diet Coke always hits the spot."  },
    category: "drinks",
    rating: 2,
    stock: 5,
    active:true
  },
  {
    name: "Diet Coke 1 Lt",
    image: "https://i.postimg.cc/SRmVkc5s/dietcoke1.png",
    price: 1.92,
    detail: { onSugar: "nosugar", volumen: "1000" , description: "This is the kind of sugar-free soda that you want throughout your day. Whether you’re looking for a tasty way start to your day or to refresh your afternoon, you'll never be lost with a Diet Coke.Diet Coke always hits the spot." },
    category: "drinks",
    rating: 2,
    stock: 5,
    active:true
  },
  {
    name: "Diet Coke 2 Lt",
    image: "https://i.postimg.cc/V6z8WtkY/dietcoke.png",
    price: 2.42,
    detail: { onSugar: "nosugar", volumen: "2000" , description: "Soda. Pop. Soft drink. This is the kind of sugar-free soda that you want throughout your day. Whether you’re looking for a tasty way start to your day or to refresh your afternoon, you'll never be lost with a Diet Coke.Diet Coke always hits the spot." },
    category: "drinks",
    rating: 2,
    stock: 5,
    active:true
  },
  {
    name: "Fanta 0,6 Lt",
    image: "https://i.postimg.cc/CKTYdXyn/fanta.png",
    price: 1.22,
    detail: { onSugar: "sugar",volumen: "600", description: "Soda. Pop. Soft drink. Choosing the right fruit soda can be a whole thing. But when you’ve got a delicious bottle of Fanta Orange ready to go, the decision is easy. "},
    category: "drinks",
    rating: 4,
    stock: 5,
    active:true
  },
  {
    name: "Fanta Zero 0,6 Lt",
    image: "https://i.postimg.cc/G2wqgWxv/fantazaro.png",
    price: 1.50,
    detail: { onSugar: "nosugar",volumen: "600", description:"Soda. Pop. Soft drink. Choosing the right fruit soda can be a whole thing. But when you’ve got a delicious bottle of Fanta Orange Zero Sugar ready to go, the decision is easy." },
    category: "drinks",
    rating: 3,
    stock: 5,
    active:true
  },
  {
    name: "Fanta 2 Lt",
    image: "https://i.postimg.cc/L5vDXnKV/fanta2lt.png",
    price: 2.48,
    detail: { onSugar: "sugar",volumen: "2000" , description: "Soda. Pop. Soft drink. Choosing the right fruit soda can be a whole thing. But when you’ve got a delicious bottle of Fanta Orange ready to go, the decision is easy. "},
    category: "drinks",
    rating: 3,
    stock: 5,
    active:true
  },
  {
    name: "Sprite 0,6 Lt",
    image: "https://i.postimg.cc/cHTN9Jvf/sprite.png",
    price: 1.22,
    detail: { onSugar: "sugar",volumen: "600", description:"Soda. Pop. Soft drink. It’s a one-of-a-kind, citrus soda that’s got a lemon-lime flavor made with cut through refreshment, making sure you’re ready to leave your mark."  },
    category: "drinks",
    rating: 3,
    stock: 0,
    active:false
  },
  {
    name: "Sprite 2 Lt",
    image: "https://i.postimg.cc/xCvgw66h/sprite2lt.png",
    price: 1.22,
    detail: { onSugar: "sugar",volumen: "2000", description:"Soda. Pop. Soft drink. It’s a one-of-a-kind, citrus soda that’s got a lemon-lime flavor made with cut through refreshment, making sure you’re ready to leave your mark."  },
    category: "drinks",
    rating: 3,
    stock: 0,
    active:false
  },
  {
    name: "Sprite Zero 2 Lt",
    image: "https://i.postimg.cc/6QGM0Wn9/spritezero2lt.png",
    price: 1.22,
    detail: { onSugar: "nosugar",volumen: "2000"  , description:"Soda. Pop. Soft drink. It’s a one-of-a-kind, citrus soda that’s got a lemon-lime flavor made with cut through refreshment, making sure you’re ready to leave your mark."  },
    category: "drinks",
    rating: 3,
    stock: 0,
    active:false
  },
  {
    name: "Water 0,6 Lt",
    image: "https://i.postimg.cc/rFHq2zQJ/agua.png",
    price: 1.12,
    detail: { onSugar: "nosugar" ,volumen: "600", description: "Pure water, perfect taste Purified through a rigorous, 7-step process Ideal for c-store, concessions and vending" },
    category: "drinks",
    rating: 4,
    stock: 10,
    active:true
  },
  {
    name: "Sparking Water 0,6 Lt",
    image: "https://i.postimg.cc/Nj8nqfLp/sparksoda.png",
    price: 0.92,
    detail: { onSugar: "nosugar" ,volumen: "600", description: "Enjoy the delightfully refreshing taste of our Great Value Low Sodium Club Soda." },
    category: "drinks",
    rating: 3,
    stock: 5,
    active:true
  },
  {
    name: "Peach Sparkling Water 1 Lt",
    image: "https://i.postimg.cc/kMSM6z4K/peachwater.png",
    price: 1.00,
    detail: { onSugar: "nosugar" ,volumen: "1000", description:"Keep a sizable amount of bubbly refreshment on hand for any time you need with Clear American Peach Sparkling Water. This sparkling water has a peach flavor to offer a light alternative to sugary sodas and other sweet drinks." },
    category: "drinks",
    rating: 3,
    stock: 3,
    active:true
  },
  {
    name: "Apple Sparkling Water 1 Lt",
    image: "https://i.postimg.cc/c4NxQhgj/applewater.png",
    price: 1.00,
    detail: { onSugar: "nosugar" ,volumen: "1000", description:"Keep a sizable amount of bubbly refreshment on hand for any time you need with Clear American Peach Sparkling Water. This sparkling water has a peach flavor to offer a light alternative to sugary sodas and other sweet drinks." },
    category: "drinks",
    rating: 3,
    stock: 5,
    active:true
  },
  {
    name: "Lime Sparkling Water 1 Lt",
    image: "https://i.postimg.cc/Y9s7GfcX/limewater.png",
    price: 1.00,
    detail: { onSugar: "nosugar" ,volumen: "1000", description:"Keep a sizable amount of bubbly refreshment on hand for any time you need with Clear American Peach Sparkling Water. This sparkling water has a peach flavor to offer a light alternative to sugary sodas and other sweet drinks." },
    category: "drinks",
    rating: 3,
    stock: 8,
    active:true
  },
  {
    name: "Strawberry Fanta 0,6 Lt",
    image: "https://i.postimg.cc/yxdCwzRt/redfanta.png",
    price: 1.22,
    detail: { onSugar: "sugar",volumen: "600", description:"Soda. Pop. Soft drink. Choosing the right fruit soda can be a whole thing. But when you’ve got a delicious bottle of Fanta Strawberry ready to go, the decision is easy. " },
    category: "drinks",
    rating: 1,
    stock: 15,
    active:true
  },
  {
    name: "RockStar Orange",
    image: "https://i.postimg.cc/436GcPZL/rockstarorange.png",
    price: 1.5,
    detail: { onSugar: "sugar", volumen: "500", description:"Non-carbonated drink, with orange taste. Includes caffeine." },
    category: "drinks",
    rating: 2,
    stock: 12,
    active:true
  },
  {
    name: "Vitamin Water 0,6 Lt",
    image: "https://i.postimg.cc/FzPXmbJT/gatorade.png",
    price: 1.48,
    detail: { onSugar: "sugar",volumen: "600", description: "It's a dragon fruit flavored water beverage with vitamins and deliciousness, but now it’s a bazillion times more good because of all the nutrient enhancements and its sports-level hydration. " },
    category: "drinks",
    rating: 1,
    stock: 10,
    active:true
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
      protein: 5,
      subcategory: "sweet",
      description: "Brownie topped with Cookie Dough Frosting and M&M’S® MINIS Chocolate Candies",
    },
    category: "sides",
    rating: 5,
    stock: 11,
    active:true
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
      protein: 3,
      subcategory: "sweet",
      description: "Brownie topped with Cookie Dough Frosting and TWIX® Cookie Bar Pieces",
    },
    category: "sides",
    rating: 4,
    stock: 8,
    active:true
  },
  {
    name: "Tillamook Old-Fashioned Vanilla Ice Cream, 48 oz",
    image: "https://i.postimg.cc/HnJK2qct/vainila.jpg",
    price: 4.84,
    description: {},
    detail: {
      calories: 210,
      fat: 17,
      carbs: 22,
      protein: 4,
      subcategory: "icecream",
      description: "With a smooth, creamy texture and vanilla flavor, this simple, yet rich old-fashioned vanilla ice cream is one you won't forget. Made with more cream than required and less air, Tillamook Ice Cream is creamier, smoother and richer for the most delicious spoonfuls."
    },
    category: "sides",
    rating: 3,
    stock: 11,
    active:true
  },
  {
    name: "Tillamook Chocolate Chip Cookie Dough Ice Cream, 48 oz",
    image: "https://i.postimg.cc/wvrM1Y3b/chocolatechip.jpg",
    price: 4.84,
    description: {},
    detail: {
      calories: 240,
      fat: 13,
      carbs: 30,
      protein: 3,
      subcategory: "icecream",
      description: " With the smooth, creamy texture of cookie dough ice cream, delicious chocolate chip bits and cookie dough bites, this simple, yet rich cookie ice cream is one you won't forget. Made with more cream than required and less air, Tillamook Ice Cream is creamier, smoother and richer for the most delicious spoonfuls."
    },
    category: "sides",
    rating: 3,
    stock: 7,
    active:true
  },
  {
    name: "Tillamook Original Premium Cookies And Cream Ice Cream, 48 fl oz",
    image: "https://i.postimg.cc/63qT6p6v/oreocream.jpg",
    price: 4.84,
    description: {},
    detail: {
      calories: 230,
      fat: 13,
      carbs: 27,
      protein: 4,
      subcategory: "icecream",
      description: "Extra creamy Tillamook Cookies and Cream Ice Cream has a smooth texture and decadent mix of rich flavors that will make you fall in love with dessert over and over again. Made without compromise, Tillamook Ice Cream contains no artificial flavors or preservatives and is made with milk from cows not treated with rBST*."
    },
    category: "sides",
    rating: 3,
    stock: 7,
    active:true
  },
  {
    name: "Tillamook Mudslide Ice Cream, 48 oz",
    image: "https://i.postimg.cc/NMp7NtKr/tillamook.jpg",
    price: 4.84,
    description: {},
    detail: {
      calories: 260,
      fat: 16,
      carbs: 26,
      protein: 4,
      subcategory: "icecream",
      description: "With the smooth, creamy texture of Tillamook Chocolate Ice Cream, fudge and chocolate chips, this simple, yet rich chocolate ice cream is one you won't forget. Made with more cream than required and less air, Tillamook Ice Cream is creamier, smoother and richer for the most delicious spoonfuls. "
    },
    category: "sides",
    rating: 4,
    stock: 7,
    active:true
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
      protein: 47,
      subcategory: "salad",
      description: "Traditionally seasoned oven roasted wings"
    },
    category: "sides",
    rating: 3,
    stock: 10,
    active:true
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
      protein: 48,
      subcategory: "salad",
      description: "Oven roasted wings with a sweet traditional BBQ sauce"

    },
    category: "sides",
    rating: 4,
    stock: 9,
    active:true
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
      protein: 49,
      subcategory: "salad",
      description: "Oven roasted wings with a creamy Garlic Parmesan sauce"

    },
    category: "sides",
    rating: 2,
    stock: 0,
    active:false
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
      protein: 1,
      subcategory: "dip",
      description: "Tomato dipping sauce with a special blend of tasty herbs and spices",

    },
    category: "sides",
    rating: 4,
    stock: 10,
    active:true
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
      protein: 0,
      subcategory: "dip",
      description: "Butter and garlic flavored dipping sauce",

    },
    category: "sides",
    rating: 3,
    stock: 0,
    active:false
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
      protein: 2,
      subcategory: "dip",
      description: "Flavorful Buffalo ranch dipping sauce",

    },
    category: "sides",
    rating: 3,
    stock: 12,
    active:true
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
      protein: 1,
      subcategory: "dip",
      description: "Flavorful cheesy-jalapeño dipping sauce",

    },
    category: "sides",
    rating: 3,
    stock: 6,
    active:true
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
      protein: 2,
      subcategory: "dip",
      description: "Flavorful ranch dipping sauce",


    },
    category: "sides",
    rating: 2,
    stock: 7,
    active:true
  }
];

module.exports = itemList;
