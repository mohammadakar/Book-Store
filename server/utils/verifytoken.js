const jwt=require("jsonwebtoken")

const verifyAdmin = (req,res,next) =>{
    const token = req.cookies.token;
    if(!token){
        return res.status(401).json({message:"Invalid Admin"})
    } else {
        jwt.verify(token,process.env.ADMIN_SECRET_KEY,(err,decoded)=>{
            if(err){
                return res.json({message:"Invalid Token"})
            }else{
                req.username=decoded.username;
                req.role=decoded.role;
                next();
            }
        })
    }
}
const verifyUser = (req,res,next) =>{
    const token = req.cookies.token;
    if(!token){
        return res.status(401).json({message:"Invalid user"})
    } else {
        jwt.verify(token,process.env.ADMIN_SECRET_KEY,(err,decoded)=>{
            if(err){
                jwt.verify(token,process.env.STUDENT_SECRET_KEY,(err,decoded)=>{
                    if(err){
                        return res.json({message:"Invalid Token"})
                    }else{
                        req.username=decoded.username;
                        req.role=decoded.role;
                        next();
                    }
                })
            }else{
                req.username=decoded.username;
                req.role=decoded.role;
                next();
            }
        })
    }
}

module.exports={verifyAdmin,verifyUser};