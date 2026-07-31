const mongoose=require("mongoose");
//const Module=require('node:module');

const userschema =new mongoose.Schema({
    fullname: {type:String,
        reuire:true},
    email:   { type: String,
               require:true},
    password:{type:String,
             require:true
    },           
},
{timestamps:true},
);
module.exports=mongoose.model('user',userschema );


