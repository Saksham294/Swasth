const jwt=require("jsonwebtoken")



const sendToken=async (user,statusCode,res)=>{

    const token=user.getJWTToken();

    const cookieOptions={
        expires:new Date(Date.now()+"5"*24*60*60*1000),
        httpOnly:true,}
    res.status(statusCode).cookie("token",token,cookieOptions).json({
        success:true,
        token
    })
}

module.exports=sendToken;