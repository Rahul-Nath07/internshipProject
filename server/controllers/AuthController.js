const UserModel=require("../models/user.js")
const bcrypt=require('bcrypt')
const jwt=require("jsonwebtoken")
//env.config();

const signup=async (req,res)=>{
    try{
        const  {name,email,password}=req.body;
        const user=await UserModel.findOne({email})
        if(user){
            return res.status(409)
            .json({messege:"User is already exists",success:false})
        }
     const userModel=new UserModel({name,email,password});
     userModel.password=await bcrypt.hash(password,10);
     await userModel.save();
     res.status(201)
     .json({
        messege:"Sign Up Sucessfully",
        success:true
     })

    }
    catch(error){
            res.status(500)
            console.error(error)
            .json({
                message:"Internal error",
                success:false
            })
    }
}
const login=async (req,res)=>{
    try{
        const  {email,password}=req.body;
        const user=await UserModel.findOne({email})
        if(!user){
            return res.status(403)
            .json({messege:"Auth fail",success:false})
        }
     const isPassValid=await bcrypt.compare(password,user.password);
     if(!isPassValid){
        return res.status(403)
        .json({
            message:"Auth faild",success:false
        })
     }
    
    const jwtToken=jwt.sign({
        email:user.email,
        _id:user._id
    },
    process.env.JWT_SECRET,
    {
        expiresIn:"30h"
    }
)

     res.status(201)
     .json({
        messege:"login Sucessfully",
        success:true,
        jwtToken,
        email,
        name:user.name
     })

    }
    catch(error){
            res.status(500)
            console.error(error)
            .json({
                message:"Internal error",
                success:false
           })
     }
}

module.exports={
    signup,
    login,
   
}