const jwt=require("jsonwebtoken");
const bcrypt=require("bcrypt");
const Admin = require("../models/Admin");
const Student = require("../models/Student");

module.exports.loginUser=async(req,res,next)=>{
    try {
        const {username,password,role}=req.body;
        if(role==="admin"){
            const admin= await Admin.findOne({username});
            if(!admin){
                return res.status(404).json({message:"admin not found"})
            }
            const validPassword=await bcrypt.compare(password,admin.password);
            if(!validPassword){
                return res.status(401).json({message:"Invalid password"});
            }
            const token=jwt.sign({username:admin.username,role:'admin'},process.env.ADMIN_SECRET_KEY);
            res.cookie('token',token,{httpOnly:true,secure:true})
            return res.status(200).json({login:true,role:'admin'})
        }else if(role==='student'){
            const student= await Student.findOne({username});
            if(!student){
                return res.status(404).json({message:"student not found"})
            }
            const validPassword=await bcrypt.compare(password,student.password);
            if(!validPassword){
                return res.status(401).json({message:"Invalid password"});
            }
            const token=jwt.sign({username:student.username,role:'student'},process.env.STUDENT_SECRET_KEY);
            res.cookie('token',token,{httpOnly:true,secure:true})
            return res.status(200).json({login:true,role:'student'})
        }else {
    
        }
    } catch (error) {
        next(error)
    }
}

module.exports.verifyU=async (req,res,next)=>{
    try {
        res.json({login:true,role:req.role})
    } catch (error) {
        next(error)
    }
}

module.exports.logoutUser=async(req,res,next)=>{
    try {
        res.clearCookie("token");
        res.status(200).json({logout:true})
    } catch (error) {
        next(error)
    }
}