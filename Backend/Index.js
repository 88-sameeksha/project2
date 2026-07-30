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


//middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookie());

app.listen(port,()=>{
    console.log(`server is listening at port ${port}`);
});