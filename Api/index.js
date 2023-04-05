require('dotenv').config()
const server = require("./src/app.js");
const { conn } = require("./src/db.js");
const createIngredients = require('./src/update/createIngredients');
const createPizzas = require('./src/update/createPizzas');
const createAdmin = require('./src/update/createAdmin')
const port = process.env.PORT || 3001

// Syncing all the models at once.
conn.sync({ alter: true }).then(() => {
  
  createIngredients();
  createPizzas();
  createAdmin();
  server.listen(port, () => {
    console.log(`%s listening at ${port}`); // eslint-disable-line no-console
  });
});
