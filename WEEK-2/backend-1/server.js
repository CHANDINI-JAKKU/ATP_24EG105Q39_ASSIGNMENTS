//create HTTP server
import exp from 'express'

const app = exp() // creates express application

//import APIs
import { userApp } from "./APIs/UserAPI.js"
import { productApp } from "./APIs/ProductAPI.js"

//use body parser middleware (in-built)
app.use(exp.json())

//custom middleware-1
function middleware1(req, res, next) {
  console.log("middleware1 executed")
  next()
}

//custom middleware-2
function middleware2(req, res, next) {
  console.log("middleware2 executed")
  next()
}

//use custom middlewares
app.use(middleware1)
app.use(middleware2)

//forward requests to user API
app.use('/user-api', userApp)

//forward requests to product API
app.use('/product-api', productApp)

//home route
app.get('/', (req, res) => {
  res.send("Server is running...")
})

//set port number
const port = 3000

//start server
app.listen(port, () => {
  console.log(`server listening on port ${port}...`)
})