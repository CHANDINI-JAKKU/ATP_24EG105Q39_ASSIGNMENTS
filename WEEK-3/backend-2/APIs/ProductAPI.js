// Create a separate Express Router for Product-related API routes
import exp from 'express'
import {ProductModel} from '../models/ProductModel.js'
// bcryptjs used for comparing/hashing (imported for consistency, used in auth)
import {compare,hash} from "bcryptjs"
// jsonwebtoken used to sign and verify JWT tokens
import jwt from 'jsonwebtoken'
// verifyToken middleware protects routes requiring authentication
import { verifyToken } from '../middlewares/verifyToken.js'
const {sign}=jwt

// Create a mini Express Router for product routes
export const productApp=exp.Router()

// Route: POST /product-api/auth - Product Authentication (Login)
// Verifies productId and productName, then generates a JWT token stored in a cookie
productApp.post('/auth',async(req,res)=>{
    // Extract productId and productName from request body
    const {productId,productName}=req.body;
    // Check if the product with this productId exists in MongoDB
    let product=await ProductModel.findOne({productId:productId})
    if(product===null){
        // If product not found, return 404
        return res.status(404).json({message:"Invalid productId"})
    }
    // Check if the provided productName matches the stored productName
   if(productName !== product.productName){
    return res.status(400).json({message:"Invalid productName"})
}
    // Sign a JWT token using the productId, expires in 1 hour
    const signedToken = sign({ productId: product.productId }, "abcdef", { expiresIn: "1h" });
  // Store the signed token as an HTTP-only cookie to prevent XSS attacks
  res.cookie("token",signedToken,{
    httpOnly:true,  // not accessible via browser JavaScript
    sameSite:"lax", // controls cross-site behavior
    secure:false    // set to true in production with HTTPS
  })
  // Send success response with the product data
  res.status(200).json({message:"login success",payload:product})  

})

// Route: POST /product-api/products - Create a new product
productApp.post("/products",async(req,res)=>{
    // Get new product data from request body
    const newProduct=req.body;
    // Create a new Mongoose document using ProductModel schema
    const newProductDocument=new ProductModel(newProduct)
    // Save the product document to MongoDB
    await newProductDocument.save()
    // Respond with 201 Created status
    res.status(201).json({message:"product created"})
    
    });

// Route: GET /product-api/products - Get all products (Protected)
// Requires a valid JWT cookie to access this route
productApp.get("/products",verifyToken,async(req,res)=>{
    // Fetch all product documents from MongoDB
    let productsList=await ProductModel.find();
    res.status(200).json({message:"products",payload:productsList})
})

// Route: GET /product-api/products/:productId - Get a product by its productId (Protected)
productApp.get("/products/:productId",verifyToken,async(req,res)=>{
    // Read productId from URL parameter
    const pid=req.params.productId  
    // Find the product using the custom productId field (not MongoDB _id)
    const productObj=await ProductModel.findOne({productId:pid})
    if(!productObj){
       // If product not found, return 404 with error message
       return  res.status(404).json({message:"product not found"})
    }
    res.status(200).json({message:"product",payload:productObj})

})

// Route: PUT /product-api/products/:productId - Update a product by productId (Protected)
productApp.put("/products/:productId",verifyToken,async(req,res)=>{
    // Get modified product fields from request body
    const modifiedProduct=req.body;
    const pid=req.params.productId;
    // Find the product by productId and update only the provided fields using $set
    // new:true returns the updated document, runValidators enforces schema validation
   const updatedProduct=await ProductModel.findOneAndUpdate(
    {productId:pid},
    {$set:modifiedProduct},
    {new:true,runValidators:true}
   )
    res.status(200).json({message:"Product Modified",payload: updatedProduct})
})

// Route: DELETE /product-api/products/:productId - Delete a product by productId (Protected)
productApp.delete("/products/:productId",verifyToken,async(req,res)=>{
    // Read productId from URL parameter
    const pid=req.params.productId
    // Find the product and delete it from MongoDB
    const deletedProduct=await ProductModel.findOneAndDelete({productId:pid})
    if(!deletedProduct){
       // If product doesn't exist, return 404
       return  res.status(404).json({message:"Product not found"})
    }
    // Return deleted product data in response
    res.status(200).json({
        message:"product deleted",payload:deletedProduct
    })
})