// JWT Token Verification Middleware
// This middleware protects routes by checking for a valid JWT token in the request cookies
// If the token is missing or invalid, it blocks the request and returns an error

import jwt from 'jsonwebtoken'
const {verify}=jwt

export function verifyToken(req,res,next){
    // Log the incoming token from the cookie (useful for debugging)
    console.log("token object is ",req.cookies.token)
    
    // Read the token from the request cookie (set during login)
    const token=req.cookies?.token;
    
    // If no token is present, the user is not logged in
    if(!token){
        return res.status(401).json({message:"Unauthorized. Please login first."})
    }
    
    try{
        // Verify the token using the same secret key used to sign it during login
        const decodedToken=verify(token,"abcdef")
        // Attach the decoded token payload (user/product info) to the request object
        // This allows route handlers to access the logged-in user's data via req.user
        req.user=decodedToken
        console.log("Decoded token:",decodedToken)
        // Pass control to the next route handler
        next()
    }catch(err){
        // If token is expired or tampered, return 401 Unauthorized
        res.status(401).json({message:"Session expired. Please login again."})
    }
}