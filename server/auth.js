const express = require("express");
const jwt=require('jsonwebtoken')
const bcrypt=require("bcryptjs")
const User = require("./models/user.model");
const router = express.Router();
const app = express();
require("./db");

router.get("/", (req, res) => {
  res.send("xyz");
});
app.use(express.json());



//ye user ke post ka route hai
router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(422).json({ error: "all fields are mnd" });
  }


  try {
    const UserExist = await User.findOne({ email: email });
    if (UserExist) {
      return res.status(422).json({ error: "email already exists" });
    }
    const user = new User({ name, email, password });
    const userReg =await user.save();
    console.log(`${user} user reg succ`)
    console.log(userReg);
    res.status(201).json({ message: "user reg successfully" });
  } catch (err) {
    console.log(err);
  }
});


// router register yha khatam

// router for signin

router.post("/signin",async (req,res)=>{
    try{
        let token;
        const {email,password}=req.body
        if(!email || !password){
            return res.status(400).json({error:"plz fill credentials"})
        }
        const userLogin=await User.findOne({email:email})

        if(userLogin){
            const isMatch=await bcrypt.compare(password,userLogin.password)
             token =await userLogin.generateAuthToken()
            console.log(token);

        if(!isMatch){
            res.status(400).json({error:"password does not match"})
        }else{

            res.status(200).json("user logged successfully")
        }

        
        }else{
            res.status(400).json({error:"invalid credentials"})
        }



    }catch(err){
        console.log(err);
    }
})


module.exports = router;
