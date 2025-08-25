
/*import jwt from "jsonwebtoken"
const isAuth=async (req,res,next)=>{
    try {
 
      let {token} = req.cookies
     
      if(!token){
        return res.status(400).json({message:"user doesn't have token"})
      }
      let verifyToken = jwt.verify(token,process.env.JWT_SECRET)
      
      if(!verifyToken){
        return res.status(400).json({message:"user doesn't have valid token"})
      }
  
      req.userId = verifyToken.userId
      next()
    } catch (error) {
        console.log(error)
        return res.status(500).json({message:`is auth error ${error}`})
    }
}
export default isAuth*/


import jwt from "jsonwebtoken";

const isAuth = (req, res, next) => {
  try {
    // Get token from cookies or Authorization header
    let token = req.cookies.token || req.headers.authorization?.split(" ")[1];

    if (!token) {
      return res.status(400).json({ message: "User doesn't have token" });
    }

    const verifyToken = jwt.verify(token, process.env.JWT_SECRET);

    if (!verifyToken) {
      return res.status(400).json({ message: "User doesn't have valid token" });
    }

    req.userId = verifyToken.userId;
    next();
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: `isAuth error ${error}` });
  }
};

export default isAuth;
