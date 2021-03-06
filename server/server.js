const dotenv=require("dotenv")
const express=require("express")
// const mongoose=require("mongoose")
dotenv.config({path:'./config.env'})
const DB=process.env.DATABASE;
const PORT=process.env.PORT;
const app=express()
app.use(express.json())
app.use(require("./auth.js"))
require("./db")

const middleware= (req,res,next)=>{
 console.log('connection successful');
// next()
}
middleware()
app.listen(PORT,async function(){
    await console.log(`app is listening on ${PORT}`);
})