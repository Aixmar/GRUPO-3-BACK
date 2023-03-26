const { User } = require("../db");
const userAdmin = require('../dbJsons/userAdmin')

const createAdmin = async () => {
  const adminCreate = await User.findAll();
  if (adminCreate.length) return;
  await User.bulkCreate(userAdmin);
};

module.exports = createAdmin;


