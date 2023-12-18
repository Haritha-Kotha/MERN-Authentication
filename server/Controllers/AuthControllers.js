
const User = require("../Models/user")
const {hashPassword, comparePassword} = require('../Helpers/auth')
const jwt = require('jsonwebtoken')

const test = (req, res) =>{
    res.json("test is working")
}
//register endpoint
const register = async(req,res) =>{
    try {
        const {name, email, password} = req.body;
        //checkings
        if(!name)
        {
            return res.json({
                error : "Name is required"
            })
        }
        if(!password || password.length < 6 )
        {
            return res.json({
                error : "Password is required & it should be atleast 6 characters"
            })
        }
        const exist = await User.findOne({email})
        if(exist)
        {
            return res.json({
                error : "Email is already exists"
            })
        }
 
        const hashedPassword = await hashPassword(password)
        //create user in db
        const user = await User.create({
            name,
            email,
            password : hashedPassword
        })
        return res.json(user)
    } 
    catch (error) {
        console.log(error)
    }
}

//login endpoint
const login = async(req, res) =>{
    try {
        const {email, password} = req.body
        //checking user exist
        const user = await User.findOne({email})
        if(!user && !password)
        {
            return res.json({
                error : "User not found"
            })
        }

        const match = await comparePassword(password,user.password)
        if(match)
        {
            //res.json("password match")
            jwt.sign({email : user.email, id : user._id, name : user.name}, process.env.JWT_SECREAT,{},(err,token)=>{
                if(err)
                {
                    throw err
                }
                res.cookie('token',token).json(user)
            })
        }
        if(!match)
        {
            return res.json({
                error : "Incorrect Password"
            })
        }
    } catch (error) {
        console.log(error)
    }
}

const getProfile = (req,res) =>{
    const {token} = req.cookies
    if(token)
    {
        jwt.verify(token, process.env.JWT_SECREAT, {}, (err,user)=>{
            if(err)
            {
                throw err
            }
            res.json(user)
        })
    }
    else{
        res.json(null)
    }
}

module.exports = {
    test,
    register,
    login,
    getProfile
}
