const express=require("express")
const User = require("./models/user.model")
const router=express.Router()
const app=express()
require("./db")

router.get("/",(req,res)=>{
    res.send('xyz')
})
app.use(express.json())
router.post("/register",async (req,res)=>{
    // const {name,email}=user;
    // console.log(name);
    const {name,email}=req.body
    if(!name||!email){
        return res.status(422).json({error:"all fields are mnd"})
    }
    try{
    

        const UserExist=await User.findOne({email:email})
        if(UserExist){
            return res.status(422).json({error:"email already exists"})
        }
        const user=new User({name,email})
       const userReg= await user.save()

       if(userReg){
        res.status(201).json({message:"user reg successfully"})
       }


       
    }
    catch(err){
        console.log(err);
        }
        // console.log(name);
    // console.log(email);
    // res.json(req.body)
})
module.exports=router