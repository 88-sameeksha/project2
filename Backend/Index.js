//step 1
const express=require("express");
const app=express();
//step 2 set dot env
const dotenv=require("dotenv");
dotenv.config();
const port=process.env.PORT;
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
//api
app.use("/api/user",userRoutes);

app.listen(port,()=>{
    console.log(`server i listening at port ${port}`);
});