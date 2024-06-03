const { loginUser, logoutUser, verifyU } = require("../controllers/authController");
const { verifyUser } = require("../utils/verifytoken");
const router =require("express").Router();

router.post("/login",loginUser)
router.get('/logout',logoutUser)
router.get('/verify',verifyUser,verifyU)
module.exports=router;