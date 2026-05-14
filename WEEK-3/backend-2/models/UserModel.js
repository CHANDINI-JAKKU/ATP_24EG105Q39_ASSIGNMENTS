// Mongoose Schema and Model for User
// Schema defines the structure and validation rules for user documents in MongoDB
import {Schema,model} from 'mongoose'

// Define the User Schema with field types and validation constraints
const userSchema=new Schema({

   username:{
    type:String,
    required:[true,"Username is required"],
    minLength:[4,"Min Length of username is 4 chars"],
    maxLength:[6,"Max Length of username is 6 chars"],
   },
   password:{
    type:String,
    required:[true,"Password required"],
   },
email:{
    type:String,
    required:[true,"email required"],
    unique:[true,"Email already existed"]
},

age:{
    type:Number,
   
},
},{
    versionKey:false,   // removes the __v field from documents
    timestamps:true    // automatically adds createdAt and updatedAt fields
});
// Create and export the UserModel using the schema
// The first argument "user" becomes the collection name "users" in MongoDB
export const UserModel=model("user",userSchema)