import exp from 'express'
import {ProductModel} from '../models/ProductModel.js'
import {compare,hash} from "bcryptjs"
import jwt from 'jsonwebtoken'
import { verifyToken } from '../middlewares/verifyToken.js'
const {sign}=jwt
export const productApp=exp.Router()
productApp.post('/auth',async(req,res)=>{
    const {productId,productName}=req.body;
    let product=await ProductModel.findOne({productId:productId})
    if(product===null){
        return res.status(404).json({message:"Invalid productId"})
    }
   if(productName !== product.productName){
    return res.status(400).json({message:"Invalid productName"})
}
    const signedToken = sign({ productId: product.productId }, "abcdef", { expiresIn: "1h" });
  //store token as httpOnly cookie
  res.cookie("token",signedToken,{
    httpOnly:true,
    sameSite:"lax",
    secure:false
  })
  //send res
  res.status(200).json({message:"login success",payload:product})  

})
 productApp.post("/products",async(req,res)=>{
    const newProduct=req.body;
    const newProductDocument=new ProductModel(newProduct)
        //save
        await newProductDocument.save()
        //send res
        res.status(201).json({message:"product created"})
    
    });
    productApp.get("/products",verifyToken,async(req,res)=>{
        let productsList=await ProductModel.find();
        res.status(200).json({message:"products",payload:productsList})
    })
    productApp.get("/products/:productId",verifyToken,async(req,res)=>{
        const pid=req.params.productId  
        const productObj=await ProductModel.findOne({productId:pid})
        if(!productObj){
           return  res.status(404).json({message:"product not found"})
        }
        res.status(200).json({message:"product",payload:productObj})
    
    })
    productApp.put("/products/:productId",verifyToken,async(req,res)=>{
        const modifiedProduct=req.body;
        const pid=req.params.productId;
       const updatedProduct=await ProductModel.findOneAndUpdate(
        {productId:pid},
        {$set:modifiedProduct},
        {new:true,runValidators:true}
       )
        res.status(200).json({message:"Product Modified",payload: updatedProduct})
    })
    
    productApp.delete("/products/:productId",verifyToken,async(req,res)=>{
        const pid=req.params.productId
        const deletedProduct=await ProductModel.findOneAndDelete({productId:pid})
    if(!deletedProduct){
           return  res.status(404).json({message:"Product not found"})
        }
        res.status(200).json({
            message:"product deleted",payload:deletedProduct
        })
    })
    
    
    