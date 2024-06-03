const Admin = require("../models/Admin");
const Book = require("../models/Book");
const Student = require("../models/Student")

module.exports.getDashboard=async(req,res,next)=>{
    try {
        const student = await Student.countDocuments();
        const admin =await Admin.countDocuments();
        const book=await Book.countDocuments();

        res.status(200).json({ok:true,student,book,admin})
    } catch (error) {
        next(error)
    }
}