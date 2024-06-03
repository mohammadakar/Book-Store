const bcrypt=require("bcrypt");
const Student = require("../models/Student");


module.exports.registerStudent=async(req,res,next)=>{
    try {
        const {roll,username,password,grade}=req.body;
        const student = await Student.findOne({username});
        if(student){
            return res.json({alreadyRegistered:true});
        }
        const hashedpassword=await bcrypt.hash(password,10)
        const newstudent= new Student({
            username,
            password:hashedpassword,
            roll:roll,
            grade
        })
        await newstudent.save();
        res.status(200).json({registered:true})
    } catch (error) {
        next(error)
    }
}