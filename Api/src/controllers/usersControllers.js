const { User, Pizza } = require("../db");
require("dotenv").config();
const jwt = require("jsonwebtoken");

const getAllUsers = async () => {
  return await User.findAll();
};
const getUserById = async (id) => {
  return await User.findByPk(id);
};
const createUser = async (
  name,
  lastName,
  email,
  password,
  birthday,
  image,
  cart,
  rol,
  previusPurchase,
  favorites,
) => {
  birthday.split("T").join(" ");
  return await User.create({
    name,
    lastName,
    email,
    password,
    birthday,
    image,
    cart,
    rol,
    previusPurchase,
    favorites,
  });
};

const updateImage = async (urlImage, userId) => {
  const user = await User.findByPk(userId);
  if (!user) {
    return res.status(404).json({ error: "User not found" });
  }
  user.image = urlImage;
  //para guardar los datos
  await user.save();
  return user;
};

const updateEmail = async (email, userId) => {
  const user = await getUserById(userId);
  if (!user) {
    return res.status(404).json({ error: "User not found" });
  }
  user.email = email;
  //para guardar los datos
  await user.save();
  return user;
};
const updatePassword = async (password, userId) => {
    const user = await getUserById(userId);
    if (!user) {
    return res.status(404).json({ error: "User not found" });
}
  user.password = password;
  //para guardar los datos
  await user.save();
  return user;
};

const putUpdateCartController = async (cart, userId) => {
    const user = await User.findByPk(userId);
    if (!user) {
        return res.status(404).json({ error: "User not found" });
    }
    user.cart = cart;
    //para guardar los datos
    await user.save();
    return user;
};

const putUpdatePurchaseController = async (cart, userId) => {
  const user = await User.findByPk(userId);
  if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    console.log("SSSSSSSSSSSSSSSSSSSSS", cart);
    user.previusPurchase = user.previusPurchase || [];
    user.previusPurchase = [...user.previusPurchase, ...cart];
    //para guardar los datos
    await user.save();
    return user;
};

// const addFavorite = async (productId, userId) => {
//   // Buscar el usuario y el producto correspondiente
//   const user = await User.findByPk(userId);
//   const product = await Pizza.findByPk(productId);
//   console.log("PRODUCTO QUE INGRESA A FAVORITE/USER",product);

//   if (!user) {
//     return res.status(404).json({ error: "User not found" });
//   }

//   // Agregar el producto a la lista de favoritos del usuario
//   user.favorites = user.favorites || [];
//   user.favorites = [...user.favorites, product];


//   await user.save();
//   return user;
// };

const addFavorite = async (productId, userId) => {
    // Buscar el usuario
    const user = await User.findByPk(userId);
    const product = await Pizza.findByPk(productId);
  
    if (!user) {
      return { error: "User not found" };
    }
  
    // Asegurarse de que favorites sea un array vacío en caso de que sea null o undefined
    user.favorites = user.favorites || [];
  
    // Verificar si el producto ya existe en la lista de favoritos del usuario
    const index = user.favorites.findIndex(favorite => favorite.id === productId);
  
    if (index !== -1) {
      // Si el producto ya existe, se borra de la lista de favoritos
      user.favorites = user.favorites.filter(favorite => favorite.id !== productId);
    } else {
      // Si el producto no existe, se busca en la base de datos y se agrega a la lista de favoritos
      user.favorites = [...user.favorites, product];
    }
  
    await user.save();
    return user;
  };

const userLogin = async (correo, psw) => {
    if (!correo || !psw) throw new Error("Username and password are required");
    
    const foundUser = await User.findOne({ where: { email: correo } });
    
    if (!foundUser)
    throw new Error("We cannot find an account with that email address");
    
    if (foundUser.password === psw) {
        const accesToken = jwt.sign(
            { email: foundUser.email },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "30s" }
    );

    const refreshToken = jwt.sign(
      { email: foundUser.email },
      process.env.REFRESH_TOKEN_SECRET,
      { expiresIn: "1d" }
    );

    foundUser.accessToken = refreshToken;

    const result = await foundUser.save();

    // tomo la info del usuario logueado que voy a enviar al front
    // const loggedInUser = {
    //     id: result.dataValues.id,
    //     name: result.dataValues.name,
    //     email: result.dataValues.email,
    //     accessToken: result.dataValues.accessToken
    // }
    return { loggedInUser: result.dataValues, refreshToken: refreshToken };
  } else {
    throw new Error("Incorrect password");
  }
};

const refreshTokenController = async (cookies) => {
  if (!cookies?.jwt) throw new Error("Forbidden");
  const refreshTokenUser = cookies.jwt;
  let accessToken;
  const foundUser = await User.findOne({
    where: { accessToken: refreshTokenUser },
  });
  if (!foundUser) throw new Error("Not found");
  jwt.verify(
    refreshTokenUser,
    process.env.REFRESH_TOKEN_SECRET,
    (err, decoded) => {
      if (err || foundUser.email !== decoded.email)
        throw new Error("Not found");
      accessToken = jwt.sign(
        { email: decoded.email },
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: "300s" }
      );
    }
  );
  return accessToken;
};

const logOut = async (res, cookies) => {
  if (!cookies?.jwt) throw new Error("Forbidden");
  const refreshTokenUser = cookies.jwt;
  const foundUser = await User.findOne({
    where: { refreshToken: refreshTokenUser },
  });
  if (!foundUser) {
    res.clearCookie("jwt", { httpOnly: true });
    return;
  }
  foundUser.refreshToken = " ";
  const result = await foundUser.save();
  res.clearCookie("jwt", { httpOnly: true });
  return;
};

module.exports = {
  getAllUsers,
  createUser,
  userLogin,
  refreshTokenController,
  logOut,
  updateImage,
  putUpdateCartController,
  putUpdatePurchaseController,
  getUserById,
  updateEmail,
  updatePassword,
  addFavorite,
};
