const mongoose=require("mongoose");
const database=async()=>{
 try{
        await mongoose.connect(process.env.MONGO_URL);
        console.log("mongo db connected");

    }
 catch(error){
   console.log(error);
}

}
module.exports=database;
