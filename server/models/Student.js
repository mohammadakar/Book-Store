const mongoose=require("mongoose");

const studentSchema=new mongoose.Schema({
    roll:{
        type:String,
        unique:true
    },
    username:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    },
    grade:{
        type:String
    }
})

const Student=mongoose.model('student',studentSchema);

module.exports=Student;