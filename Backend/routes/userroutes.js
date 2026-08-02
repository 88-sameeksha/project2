const express =require("express");
const router =express.Router();
const user=require("../models/user");
const mongoose = require('mongoose');
const bcryptjs=require("bcryptjs");
const jwt=require("jsonwebtoken");

router.post('/register',async(req,res)=>{
    try{
        const{fullname,email,password}=req.body;
        if(!fullname||!email|| !password){
            return res.status(401).json({message:"Invalid Data",success:false,})
        }
       const User=await user.findOne({email});
       if(User){
        return res.status(404).json({message:"This Email is already used",sucess:false,})
       }
       //hashpassword
       const hashedpassword=await bcryptjs.hash(password,16);
       await user.create({
        fullname,
        email,
        password:hashedpassword
       });
       return res.status(200).json({message:"Account created successfully",success:true,})


    } catch(error){
        console.log(error);
    }

});


//login
router.post('/login',async(req,res)=>{
 try{
      const{email,password}=req.body;
      if(!email||!password){
       return  res.status(401).json({message:"invalid ID password",success:false});
      }
      const User=await user.findOne({email});
      if(!User){
        return res.status(401).json({message:"User is not registerd",success:false});

      }
      const ismatch=await bcryptjs.compare(password,User.password);
      if(!ismatch){
        return res.status(401).json({message:"Invalid cerendtials!",success:false});

      }
      const token=await jwt.sign({user:User._id},process.env.JWT_SECRET,{expiresIn:'1d'});
      return res.status(200).cookie("token",token,{httponly:true}).json({ token,message:"User is logged In",success:true});

 } catch(error){
      console.log(error);
 }
});

//loggout
router.post('/logout',async(req,res)=>{
    return status(200).cookie("token","" ,{expiresIn:new Date(Date.now(),{httponly:true})}).json({message:"User logged Out successfully",success:true});
})

module.exports= router;


