// Entry point for the backend-2 Express server
// Connects to MongoDB and starts the HTTP server

import exp from 'express'
import {connect} from 'mongoose'
import { userApp } from './APIs/UserAPI.js'
import {productApp} from './APIs/ProductAPI.js'
// cookie-parser middleware is needed to read JWT tokens stored in cookies
import cookieParser from 'cookie-parser'

const app=exp()

// Middleware: Parse cookies from incoming requests (needed for JWT cookie auth)
app.use(cookieParser())
// Middleware: Parse incoming JSON request bodies
app.use(exp.json())

// Route forwarding: All requests starting with /user-api go to UserAPI router
app.use("/user-api",userApp)
// Route forwarding: All requests starting with /product-api go to ProductAPI router
app.use("/product-api",productApp)

// Connect to MongoDB and then start the server
// The server only starts AFTER a successful DB connection
async function connectDB(){
    // Connect to the local MongoDB instance at port 27017
    await connect("mongodb://localhost:27017/anuragDB")
    console.log("DB connection success")
    // Start the HTTP server on port 3000
    app.listen(3000,()=>console.log("server on port 3000...."))
}
connectDB()

// Global Error Handling Middleware
// Catches errors thrown by async route handlers and sends appropriate responses
app.use((err,req,res,next)=>{
    // Handle Mongoose ValidationError (e.g., missing required fields, failed rules)
    if(err.name==="ValidationError"){
    return res.status(400).json({message:"Validation error occurred",error:err.message})
    }
    // Handle Mongoose CastError (e.g., invalid ObjectId format in URL params)
    if(err.name==="CastError"){
      return  res.status(400).json({message:"Invalid ID format",error:err.message}) 
    }
    // Handle all other server-side errors
    res.status(500).json({message:"Internal server error",error:err.message})
})