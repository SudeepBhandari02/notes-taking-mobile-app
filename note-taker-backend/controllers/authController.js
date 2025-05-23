const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const { generateAccessToken, generateRefreshToken } = require('../utils/tokenUtils');


const signup = async (req,res)=> {
    try {
        console.log("inside signup");
        
        const {email,password} = req.body;

        const userExists =await User.findOne({email});
        if(userExists){
            return res.status(409).json({message:"User already Exists"});
        }

        const hashedPassword = await bcrypt.hash(password,10);
        const newUser = await User.create({
            email : email,
            password : hashedPassword,
        });

        const accessToken = generateAccessToken(newUser);
        const refreshToken = generateRefreshToken(newUser);

        res.status(201).json({
            success: true,
            message: 'User registered successfully',
            userId: newUser._id,
            accessToken,
            refreshToken
        });

    } catch (error) {
        console.error(error);
        return res.status(400).json({error:"Server failed while creating account"});
    }
}

const login = async (req,res) =>{
    try {

        const {email,password} = req.body;
        const user =await User.findOne({email});
        if(!user){
            return res.status(404).json({
                message:"User not found"
            })
        }
        const passwordMatch = await bcrypt.compare(password,user.password);
        if (!passwordMatch){
            return res.status(401).json({ error: 'Invalid credentials'});
        }

        const accessToken = generateAccessToken(user);
        const refreshToken = generateRefreshToken(user);

        res.status(200).json({
            success: true,
            accessToken,
            refreshToken
          });

    } catch (error) {
        console.error(error);
        return res.status(400).json({error:"Login Failed - server problem"});
    }
}

const refreshToken = async (req, res) => {
    const { token } = req.body;
    if (!token) return res.sendStatus(401);
    const decoded = jwt.verify(token,process.env.JWT_SECRET);
    const user = await User.findById(decoded.id);
    if(!user){
        return res.status(401).json({error:"Invalid Refresh token"})
    }
  
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
      if (err) return res.sendStatus(403);
  
      const newAccessToken = generateAccessToken(user);
      res.json({ accessToken: newAccessToken });
    });
}

module.exports = {signup,login,refreshToken};