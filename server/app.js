const express=require("express")
const app=express()
const userRoutes=require("./routes/userRoutes")
const feedbackRoutes=require("./routes/feedbackRoutes")


var cors = require('cors');
var cookieParser = require('cookie-parser')
app.use(cookieParser())
app.use(express.json({
    limit:"50mb"
}))
app.use(cors());


app.use('/api/',userRoutes)
app.use('/api/',feedbackRoutes)




module.exports=app 