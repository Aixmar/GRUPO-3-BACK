const { User, Pizza } = require("../db");
require("dotenv").config();
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");

const { EMAIL, EMAIL_PASSWORD } = process.env;
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
  location
) => {
  birthday.split("T").join(" ");
  const foundUser = await User.findOne({ where: { email : email } });
   if(foundUser) throw new Error('There is already an account registered with that email')
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
    location
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

const forgotPasswordController = async(email)=>{
  if(!email) throw new Error("email requerid");
  const user = await User.findOne({
    where: { email: email },
  });
  if(!user) throw new Error("There is not any user with that email");
  const token = jwt.sign({id : user.id},'esterno',{expiresIn:'15m' })
  user.update({
    tokenResetPassword : token
  })
  const transporter = nodemailer.createTransport({
    service: "gmail",
    port: 587,
    secure: false,
    auth: {
      user: EMAIL,
      pass: EMAIL_PASSWORD,
    },
    tls: {
      rejectUnauthorized: false
  }
  });
  const tokenMail = token.replaceAll(".","$")
  console.log(tokenMail);
  const emailPort = 'http://localhost:5173'
  const mailOptions = {
    from : "mix2pizza@gmail.com",
    to : `${email}`,
    subject : 'Reset your passwowrd',
    html: `
    <html>
    <head>
        <meta charset="UTF-8">
        <title>Reset your passwowrd</title>
        <style type="text/css">
            body {
                font-family: Arial, sans-serif;
                font-size: 16px;
                line-height: 1.5;
                color: #333;
            }
            h1, h2, h3 {
                font-weight: normal;
                margin: 0;
                padding: 0;
                line-height: 1.2;
            }
            h1 {
                font-size: 28px;
                margin-bottom: 10px;
            }
            h2 {
                font-size: 24px;
                margin-bottom: 5px;
            }
            p {
                margin-top: 0;
                margin-bottom: 10px;
            }
            .table {
                border-collapse: collapse;
                width: 100%;
                margin-bottom: 20px;
            }
            .table th, .table td {
                padding: 10px;
                text-align: left;
                vertical-align: top;
                border-bottom: 1px solid #ccc;
            }
            .table th {
                background-color: #f5f5f5;
                font-weight: bold;
            }
            .table td:last-child {
                text-align: right;
            }
            .total {
                margin-top: 30px;
                text-align: right;
            }
            .total strong {
                font-size: 20px;
            }
        </style>
    </head>
    <body>
        <h1>Reset your passwowrd in Mix2Pizza</h1>
        
        <p>Hello,</p>
        <p>We've received a request to reset your password.No changes have been made to your account yet.</p>
        <p>Yo can reset your password by clicking the link below:</p>
        <a href="${emailPort}/resetPassword/${user.id}/${tokenMail}"> Reset your password</a>
    </body>
    </html>
    `,
  };
    
  
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error+'es aca');
    } else {
      console.log(`Correo enviado: ${info.response}`);
    }
  });
}

const resetPasswordController = async(req) =>{
  const {newPassword} = req.body
  console.log(newPassword);
  const user = await User.findOne({
    where: { 
      id: req.params.id,
      tokenResetPassword : req.params.tokenResetPassword},
  });
  if(!user) throw new Error("Error capo");
  user.password = newPassword
  user.save()
  return 'contraseña cambiada'
}


const updateLocation = async (location, userId) => {
  const user = await getUserById(userId);
  if (!user) return res.status(404).json({ error: "User not found" });
  user.location = location;
  await user.save();
  return user;
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
  forgotPasswordController,
  resetPasswordController,
  updateLocation
};
