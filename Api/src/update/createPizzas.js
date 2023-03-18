const { Pizza, User } = require("../db");
const itemList = require("../dbJsons/itemList");

const createPizzas = async () => {
  const allPizzasDatabase = await Pizza.findAll();
  if (allPizzasDatabase.length) return;

  await Pizza.bulkCreate(itemList);
};

module.exports = createPizzas;
