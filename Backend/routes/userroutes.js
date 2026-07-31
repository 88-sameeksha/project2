const express =require("express");
const router =express.Router();

router.post('/register',async()=>{
    try{
        const{fullname,email,password}=req.body;
        if(!fullname||!email|| !password){
            return res.status(401).json({message:"Invalid Data",success:false,})
        }
       const User=await user.findOne({email});
       if(User){
        return res.status(404).json({message:"This Emial is already used",sucess:false,})
       }
       await user.create({
        fullname,
        email,
        password
       });
       return res.status(200).json({message:"Account created successfully",success:true,})


    } catch(error){
        console.log(error);
    }

});

module.exports= router;


