const mongoose=require("mongoose");

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

module.exports=mongoose.model('user',userschema )


)