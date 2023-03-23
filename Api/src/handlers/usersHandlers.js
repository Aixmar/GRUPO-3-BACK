const { getAllUsers, createUser,userLogin,refreshTokenController,logOut } = require('../controllers/usersControllers');
require("dotenv").config();
const jwt = require('jsonwebtoken')



const getAllUsersHandler = async (req, res) => {
    try {
        const allUsers = await getAllUsers();
      res.status(200).json(allUsers);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };


const postUserHandler = async (req, res) => {

    const { name, lastName, email, password, birthday } = req.body;

    try {
        const newUser = await createUser(name, lastName, email, password, birthday);
        res.status(200).json(newUser);
    } catch (error) {
        res.status(400).json({ error: error.message });
    };
  };

  
const userByIdHandler = async (req, res) => {

  const { id } = req.params;

  try {
      const user = await userById(id);
      res.status(200).json(user);
  } catch (error) {
      res.status(400).json({ error: error.message });
  };
};

const postUserLoginHandler = async(req,res)=>{
    const {email,password} = req.body;
    try{
      const { loggedInUser, refreshToken } = await userLogin(email, password);
      res.cookie('jwt',refreshToken, {httpOnly:true,maxAge:24*60*60*1000} )
      res.status(200).json(loggedInUser);
    }catch(error){
      res.status(400).json({ error: error.message });
    }
}

const refreshTokenHandler = async (req,res)=>{
  const cookies = req.cookies
  
  try {
    const accesToken = await refreshTokenController(cookies)
    
    res.status(200).json(accesToken);
  } catch (error) {
    res.status(400).json({ error: error.message }); 
  }
}

const logOutHandler = async (req,res)=>{
  const cookies = req.cookies
  try {
    const response = await logOut(res,cookies)
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message }); 
  }
}

module.exports = {
    getAllUsersHandler,
    postUserHandler,
    userByIdHandler,
    postUserLoginHandler,
    refreshTokenHandler,
    logOutHandler
};