const mongoose=require("mongoose")
const DB=process.env.DATABASE;
const connect=mongoose.connect(DB,{
    useNewUrlParser:true,
    // useCreateIndex:true,
    useUnifiedTopology:true,
    // useFindAndModify:false
}).then(()=>{
    console.log('cs');
}).catch((err)=>{console.log('err',err)});
module.exports=connect;