const mongoose=require("mongoose");
const dotenv=require("dotenv");
dotenv.config();

const mongodb=()=>{mongoose.connect(process.env.MONGOOSE_URL)
.then(()=>{
    console.log("Connected to DB")
}).catch((err)=>{
    console.log(err)
})}
module.exports=mongodb