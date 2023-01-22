const jwt=require("jsonwebtoken")
const dotenv=require("dotenv")
const Doctor=require("../models/doctorModel")


dotenv.config()

const isDocAuthenticated=async (req,res,next)=>{
    try {
      const { token } = req.cookies;
      if (!token) {
        return res.status(401).json({
          message: "Please login first",
        });
      }
  
      const decoded = await jwt.verify(token, process.env.JWTKEY);
  
      req.doctor = await Doctor.findById(decoded._id);  
  
      next();
    } catch (error) {
  
      res.status(500).json({
        message: error.message,
      });
    }
  }
  
  

module.exports=isDocAuthenticated