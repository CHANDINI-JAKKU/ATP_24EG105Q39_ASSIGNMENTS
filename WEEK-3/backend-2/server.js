import exp from 'express'
import {connect} from 'mongoose'
import { userApp } from './APIs/UserAPI.js'
import {productApp} from './APIs/ProductAPI.js'
import cookieParser from 'cookie-parser'
const app=exp()
//add cookie parser middleware
app.use(cookieParser())
app.use(exp.json())
//start server
app.use("/user-api",userApp)
app.use("/product-api",productApp)
//connect to DB server
async function connectDB(){
    
        await connect("mongodb://localhost:27017/anuragDB")
        console.log("DB connection success")
        //start server
        app.listen(3000,()=>console.log("server on port 3000...."))
    
}
connectDB()
app.use((err,req,res,next)=>{
    //console.log(err.name)
    //validationerror
    if(err.name==="ValidationError"){
    return res.status(400).json({message:"error occurred",error:err.message})
    }
    //CastError
    if(err.name==="CastError"){
      return  res.status(400).json({message:"error occurred",error:err.message}) 
    }
    //send server side error
    res.status(500).json({message:"error occurred",error:err.message})
})