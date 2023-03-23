const { User } = require('../db');
require("dotenv").config();
const jwt = require('jsonwebtoken')

const getAllUsers = async () => {
    return await User.findAll();
};

const createUser = async (name, lastName, email, password, birthday) => {
    birthday.split("T").join(" ")
    return await User.create({ name, lastName, email, password, birthday });
};



const userLogin = async (correo,psw) =>{
     if(!correo || !psw) throw new Error('Username and password are required');
     const foundUser =await  User.findOne({ where: { email : correo } });
     if(!foundUser) throw new Error('We cannot find an account with that email address');
     if(foundUser.password === psw){
        const accesToken = jwt.sign(
            {"email":foundUser.email},
            process.env.ACCESS_TOKEN_SECRET,
            {expiresIn:'30s'}
        );

        const refreshToken = jwt.sign(
            {"email":foundUser.email},
            process.env.REFRESH_TOKEN_SECRET,
            {expiresIn:'1d'}
        );

        foundUser.accessToken = refreshToken;
        const result = await foundUser.save()
        return {foundUser,refreshToken}
     }else{
        throw new Error('Incorrect password');
     }
}

const refreshTokenController = async (cookies)=>{
    if(!cookies?.jwt) throw new Error('Forbidden');
    const refreshTokenUser = cookies.jwt;
    let accessToken
    const foundUser = await User.findOne({ where: { accessToken : refreshTokenUser } });
    if(!foundUser) throw new Error('Not found');
    jwt.verify(
        refreshTokenUser,
        process.env.REFRESH_TOKEN_SECRET,
        (err,decoded)=>{
            if(err || foundUser.email !== decoded.email) throw new Error('Not found');
             accessToken = jwt.sign(
                {"email":decoded.email},
                process.env.ACCESS_TOKEN_SECRET,
                {expiresIn:'300s'}
            );
        }
        
    )
    return accessToken
}

const logOut = async (res,cookies)=>{
    if(!cookies?.jwt) throw new Error('Forbidden');
    const refreshTokenUser = cookies.jwt;
    const foundUser = await User.findOne({ where: { refreshToken : refreshTokenUser } });
    if(!foundUser) {
        res.clearCookie('jwt',{httpOnly : true})
        return;
    }
    foundUser.refreshToken = ' ';
    const result = await foundUser.save()
    res.clearCookie('jwt',{httpOnly : true})
    return;
    
}

module.exports = {
    getAllUsers,
    createUser,
    userLogin,
    refreshTokenController,
    logOut
};

