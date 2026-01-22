const jwt=require('jsonwebtoken')

//next keyword: to access the next middleware
exports.protect=(req,res,next)=>{
    token=req.headers.authorization.split(' ')[1];
    if(!token){         //inbuilt startsWith function
        res.status(401).json({msg : "Not authorized"})
    }
    try{
      const decoded=jwt.verify(token,process.env.JWT_SECRET) //compare
      req.user=decoded
      next()  //move to next middleware or else move to routes if next middleware is not present
    }
    catch(error){
        res.send("Invalid token")
    }
}