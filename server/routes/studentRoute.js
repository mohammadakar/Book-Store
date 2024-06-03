const { registerStudent } = require("../controllers/studentController.js");
const {verifyAdmin} = require("../utils/verifytoken");
const router=require("express").Router();

router.post("/register",verifyAdmin,registerStudent)

module.exports=router;