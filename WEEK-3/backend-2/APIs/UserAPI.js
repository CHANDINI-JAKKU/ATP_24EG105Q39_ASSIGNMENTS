//create min-express app(Seperate route)
import exp from 'express'
import {UserModel} from '../models/UserModel.js'
import {hash,compare} from 'bcryptjs'
import {verifyToken} from '../middlewares/verifyToken.js'
import jwt from 'jsonwebtoken'
const {sign}=jwt
export const userApp=exp.Router()
userApp.post("/auth",async(req,res)=>
{
const {email,password}=req.body;
const user=await UserModel.findOne({email:email})
if(!user)
{
    return res.status(404).json({message:"Inavalid email"})
}
const result=await compare(password,user.password)
if(!result){
   return res.status(400).json({message:"Inavalid password"}) 
}
//return the token
const signedtoken=sign({email:user.email},"abcdef",{expiresIn:"1hr"})
//store toke as httponly
res.cookie("token",signedtoken,{
    httpOnly:true,
    sameSite:"lax",
    secure:false
})
res.status(200).json({message:"login sucsessfully",payload:user})

})
userApp.post("/users",async (req,res) =>{
    //get
    const newUser=req.body
    //hash the password
    const hashedPassword=await hash(newUser.password,10)
    //replace plain password with hashed password
    newUser.password=hashedPassword
    //create
    const newuserDocument=new UserModel(newUser)
    //save
    const result=await newuserDocument.save();
    console.log(result);
    res.status(201).json({message:"User Created"});
})
userApp.get("/users",verifyToken,async (req,res)=>{
    //read all users from db
    let userList=await UserModel.find();
    //send res
    res.status(200).json({meassage:"Users",payload:userList})
})
userApp.get("/users/:id",async(req,res)=>{
    //read object id from req params
    const uid=req.params.id
    //use findone method to read a document with non object id feilds
    //const userObj=await UserModel.findOne({_id:uid})
    //use findbyid to read document with object id
    const userObj=await UserModel.findById(uid)
    if(!userObj)
    {
       return res.status(404).json({message:"user Not Found"})
    }
    res.status(200).json({message:"user",payload:userObj})
})
userApp.put("/users/:id",async(req,res)=>{
    //get modified user from req
    const modifeidUser=req.body;
    const uid=req.params.id;
    //find and update
    const updatedUser=await UserModel.findByIdAndUpdate(uid,{$set:{...modifeidUser}},{new:true,runValidators:true})
    res.status(200).json({meassge:"user modifeid",payload:updatedUser})
})
userApp.delete("/users/:id",async(req,res)=>{
    //get id from user
    const uid=req.params.id;
    //find and delete
    const deletedUser=await UserModel.findByIdAndDelete(uid)
    if(!deletedUser)
    {
        return res.status(404).json({message:"Not Found"})
    }
    res.status(200).json({message:"deleted user",payload:deletedUser})
})
