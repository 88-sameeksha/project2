//step 1
const dotenv=require("dotenv");
dotenv.config();
const express=require("express");
const app=express();
const cors=require("cors");
const cookie=require("cookie-parser");

//database calll
const db=require("./config/database");
db();
//calling routes
const userRoutes =require("./routes/userroutes");



//middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookie());
const corsOptions={
    origin:'http://localhost:3000',
    credentials:true,
    successStatus:200,
}
app.use(cors(corsOptions));
//api
app.use("/api/user",userRoutes);


app.get("/clone",async(req,res)=>{
    res.send("Your Netflix clone welcoming you!!");
});


const port=process.env.PORT;
app.listen(port,'0.0.0.0',()=>{
    console.log(`server is listening at port ${port}`);
});