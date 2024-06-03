const { getDashboard } = require("../controllers/DashController");
const router=require("express").Router();

router.get("/dashboard",getDashboard)


module.exports=router