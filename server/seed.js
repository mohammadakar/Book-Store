const express = require("express");
const bcrypt=require("bcrypt");
const Admin=require("./models/Admin");
const connectToDB=require("./DB")

connectToDB();

const AdminAccount=async()=>{
    try {
        const adminCount=await Admin.countDocuments();
        if(adminCount===0){
            const hashedPassword = await bcrypt.hash('adminpassword',10);
            const newAdmin= new Admin({
                username:"admin",
                password:hashedPassword,
            })
            await newAdmin.save();
            console.log("account created");
        }else{
            console.log("account already created")
        }
    } catch (error) {
        console.log(error)
    }
}

AdminAccount();