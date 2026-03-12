import {Schema,model} from 'mongoose'

//create User Schema
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
},{versionKey:false,
    timestamps:true
});
//generate UserModel
export const UserModel=model("user",userSchema)