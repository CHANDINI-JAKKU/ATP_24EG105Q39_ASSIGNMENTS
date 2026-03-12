import exp from 'express'
export const productApp=exp.Router()

// create product API with below operations
  //create new Product({productId,name,brand,price})
  //Read all products
  //Read all Product by brand
  //Update a product
  //Delete a product by id
let products=[]
  productApp.get('/products',(req,res)=>//path and call back function
  {
    //send res to client
    res.json({message:"all products",payload:products})
    
  })



  productApp.post('/products',(req,res)=>{
    const newpro=req.body
       products.push(newpro)
    res.json({message:"product added"})
    
  })
  

  productApp.get('/products/:brand',(req,res)=>{
     let brandofurl=req.params.brand
      let pro=products.filter(proObj=>proObj.brand===brandofurl)
       if(pro===undefined){
    return res.json({message:"User not found"})
   }
 res.json({message:"all users",payload:pro})
  })



  productApp.put('/products',(req,res)=>{
   //get modified user from client
   let modifiedpro=req.body;
   //get index of existing user in users array
   let index=products.findIndex(proObj=>proObj.productId===modifiedpro.productId)
   //if user not found
   if(index===-1){
    return res.json({message:"User not found"})
   }
   //update user with index
   products.splice(index,1,modifiedpro)
   //send res 
   res.json({message:"user updated"})
  })



  productApp.delete('/products/:id',(req,res)=>{
    //get id of user from url paraeter
    let idofurl=Number(req.params.id)  //{ id:5}
    //findindex of user
    let index=products.findIndex(proObj=>proObj.productId===idofurl)
    //if user not found
    if(index===-1){
        return res.json({message:"product not found to delete"})
    }
    //delete user by index
    products.splice(index,1)
    //send res
    res.json({message:"product removed"})
  })
  