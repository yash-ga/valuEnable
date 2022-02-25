const mongoose=require("mongoose")
const jwt=require("jsonwebtoken")
const bcryptjs=require("bcryptjs")

const UserSchema=new mongoose.Schema({
    name:{type:String,required:true},
    
    email:{type:String,required:true},

    password:{type:String,required:true},

    tokens:[
        {
            token:{type:String,required:true}
        }
    ]
})


UserSchema.pre("save", async function(next){
    console.log("i am inside");
if(this.isModified("password")){
    this.password= await bcryptjs.hash(this.password,12)

}

next()

})
UserSchema.methods.generateAuthToken=async function(){
    try{
        let token=jwt.sign({_id:this._id},process.env.SECRET_KEY)
        this.tokens=this.tokens.concat({token:token})
        await this.save()
        return token
    }catch(err){
        console.log(err);
    }
}

const User=mongoose.model("users",UserSchema)


module.exports=User;