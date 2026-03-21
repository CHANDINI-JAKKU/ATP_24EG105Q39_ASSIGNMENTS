import {Schema,model} from 'mongoose'
const productSchema=new Schema({
//create User Schema

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
},{versionKey:false,
    timestamps:true
});
//generate UserModel
export const ProductModel=model("product",productSchema)