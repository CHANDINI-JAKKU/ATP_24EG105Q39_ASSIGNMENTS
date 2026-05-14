// Mongoose Schema and Model for Product
// Schema defines the structure and validation rules for product documents in MongoDB
import {Schema,model} from 'mongoose'

// Define the Product Schema with field types and validation constraints
const productSchema=new Schema({

   productId:{
    type:Number,
    required:[true,"productId is required"],
   },
   productName:{
    type:String,
    required:[true,"ProductName required"],
   },
price:{
    type:Number,
    required:[true,"price required"],
    min:[10000,"Min price is 10000"],
    max:[50000,"Max price is 50000"],
},
brand:{
    type:String,
    required:[true,"brand is required"]
    
},
},{
    versionKey:false,   // removes the __v field from documents
    timestamps:true    // automatically adds createdAt and updatedAt fields
});
// Create and export the ProductModel using the schema
// The first argument "product" becomes the collection name "products" in MongoDB
export const ProductModel=model("product",productSchema)