//create mini-express app(Separate Route)
import exp from 'express'
export const userApp =exp.Router()
//Create API(REST API-Representational State tRansfer)
//api contains route
//api is used to handle the request
//app.method(path,request handler)
  //route to handle get request of client(http://localhost:3000/users)
  let users=[]
  userApp.get('/users',(req,res)=>//path and call back function
  {
    //send res to client
    res.json({message:"all users",payload:users})
    
  })
  //route to read a user by id
  userApp.get('/users/:id',(req,res)=>{
    //get user id 
    let idofurl=Number(req.params.id)
    //find user
    let user=users.find(userObj=>userObj.id===idofurl)
    //if user not found
   if(user===undefined){
    return res.json({message:"User not found"})
   }
 res.json({message:"all users",payload:user})
  })
  //route to handle post req of client
  userApp.post('/users',(req,res)=>{
    //get user from client
    //const newuser=req.body
    //console.log(req.body)
    //push user into users
    //send res
    
    const newUser=req.body
    //push users into users
    users.push(newUser)
    res.json({message:"user created"})
    //console.log(req.body)
  })
  
  //route to handle put request of  client
  userApp.put('/users',(req,res)=>{
   //get modified user from client
   let modifiedUser=req.body;
   //get index of existing user in users array
   let index=users.findIndex(userObj=>userObj.id===modifiedUser.id)
   //if user not found
   if(index===-1){
    return res.json({message:"User not found"})
   }
   //update user with index
   users.splice(index,1,modifiedUser)
   //send res 
   res.json({message:"user updated"})
  })
  
  //route to handle delete req of client
  userApp.delete('/users/:id',(req,res)=>{
    //get id of user from url paraeter
    let idofurl=Number(req.params.id)  //{ id:5}
    //findindex of user
    let index=users.findIndex(userObj=>userObj.id===idofurl)
    //if user not found
    if(index===-1){
        return res.json({message:"User not fount to delete"})
    }
    //delete user by index
    users.splice(index,1)
    //send res
    res.json({message:"User removed"})
  })
//end point=base url(it comes upto http server)+url path
//use rest client for another request
//app is the express application by using this we cans build the entire application
