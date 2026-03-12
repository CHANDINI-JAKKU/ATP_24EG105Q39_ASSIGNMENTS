//create HTTP server
import exp from 'express'
const app=exp()//creates an express application and return it internally contains http server and many things
//use body parser middleware
import {userApp} from "./APIs/UserAPI.js"
import {productApp} from "./APIs/ProductAPI.js"
//use  body parser middleware(in-built)
app.use(exp.json())
//create custom middleware(it is a fuction)
function middleware1(req,res,next){
  //send response fromm middleware
 res.json({message:"this res from middleware1"})
 //forward req to next
 console.log("middileware1 executed")
 next()
}
function middleware2(req,res,next){
  //send response fromm middleware
  res.json({message:"this res from middleware2"})
 //forward req to next
 console.log("middileware2 executed")
 next()
}


//forward req to userAPI if path atarts with/user-api
app.use('/user-api',userApp)
//forward req to productAPI if path atarts with/product-api
app.use('/product-api',productApp)
//set a port number
const port=3000
//assign port number to HTTP server
app.listen(port,()=>console.log(`server listening po port ${port}...`))//http is a software which is installed in a computer called web server


