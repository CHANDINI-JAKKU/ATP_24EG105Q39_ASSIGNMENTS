// Create a separate Express Router for User-related API routes
import exp from 'express'
import {UserModel} from '../models/UserModel.js'
// bcryptjs is used to hash passwords before saving and compare during login
import {hash,compare} from 'bcryptjs'
// verifyToken middleware protects routes that require authentication
import {verifyToken} from '../middlewares/verifyToken.js'
// jsonwebtoken is used to generate JWT tokens on login
import jwt from 'jsonwebtoken'
const {sign}=jwt

// Create a mini Express application (Router) for user routes
export const userApp=exp.Router()

// Route: POST /user-api/auth - User Login
// Verifies email and password, generates a JWT token stored in an HTTP-only cookie
userApp.post("/auth",async(req,res)=>
{
// Extract email and password from the request body
const {email,password}=req.body;
// Check if a user with this email exists in the database
const user=await UserModel.findOne({email:email})
if(!user)
{
    // If no user found, return 404 with error message
    return res.status(404).json({message:"Invalid email"})
}
// Compare the plain password with the stored hashed password using bcrypt
const result=await compare(password,user.password)
if(!result){
   // If passwords don't match, return 400
   return res.status(400).json({message:"Invalid password"}) 
}
// Generate a signed JWT token with user's email, expires in 1 hour
const signedtoken=sign({email:user.email},"abcdef",{expiresIn:"1h"})
// Store the token as an HTTP-only cookie (not accessible via JavaScript in browser)
res.cookie("token",signedtoken,{
    httpOnly:true,  // prevents XSS attacks
    sameSite:"lax", // controls cross-site cookie behavior
    secure:false     // set to true in production with HTTPS
})
// Send success response with user data
res.status(200).json({message:"login successfully",payload:user})

})

// Route: POST /user-api/users - Register a new user
userApp.post("/users",async (req,res) =>{
    // Get new user data from request body
    const newUser=req.body
    // Hash the password using bcrypt with salt rounds = 10
    const hashedPassword=await hash(newUser.password,10)
    // Replace the plain password with the hashed version before saving
    newUser.password=hashedPassword
    // Create a new Mongoose document using UserModel
    const newuserDocument=new UserModel(newUser)
    // Save the document to MongoDB
    const result=await newuserDocument.save();
    console.log(result);
    res.status(201).json({message:"User Created"});
})

// Route: GET /user-api/users - Get all users (Protected Route)
// Requires a valid JWT token cookie to access
userApp.get("/users",verifyToken,async (req,res)=>{
    // Fetch all user documents from MongoDB
    let userList=await UserModel.find();
    // Send the list of users as response
    res.status(200).json({message:"Users",payload:userList})
})

// Route: GET /user-api/users/:id - Get a single user by MongoDB ObjectId
userApp.get("/users/:id",async(req,res)=>{
    // Read the user ID from the URL parameter
    const uid=req.params.id
    // Use findById to find the document by MongoDB ObjectId
    const userObj=await UserModel.findById(uid)
    if(!userObj)
    {
       return res.status(404).json({message:"User Not Found"})
    }
    res.status(200).json({message:"user",payload:userObj})
})

// Route: PUT /user-api/users/:id - Update a user by ID
userApp.put("/users/:id",async(req,res)=>{
    // Get modified user fields from request body
    const modifiedUser=req.body;
    const uid=req.params.id;
    // Find the user by ID and update only the provided fields using $set
    // new:true returns the updated document, runValidators enforces schema rules
    const updatedUser=await UserModel.findByIdAndUpdate(uid,{$set:{...modifiedUser}},{new:true,runValidators:true})
    res.status(200).json({message:"user modified",payload:updatedUser})
})

// Route: DELETE /user-api/users/:id - Delete a user by ID
userApp.delete("/users/:id",async(req,res)=>{
    // Get the user ID from URL parameter
    const uid=req.params.id;
    // Find and delete the user document by ID
    const deletedUser=await UserModel.findByIdAndDelete(uid)
    if(!deletedUser)
    {
        return res.status(404).json({message:"User Not Found"})
    }
    res.status(200).json({message:"deleted user",payload:deletedUser})
})
