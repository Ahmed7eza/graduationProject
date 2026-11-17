const JWT = require("jsonwebtoken");

const verifyToken = (req, res,next)=>{
    const authHeader = req.headers["authorization"] || req.headers["Authentication"];
    if(!authHeader){
        return res.status(401).json({message: "Tokens are required"});
    }
    const token = authHeader.split(" ")[1];
    if(!(authHeader.startsWith("Bearer ") && token)){
        return res.status(401).json({message: "Invalid token"});
    }
    try{
        const currentUser = JWT.verify(token, process.env.JWT_SECRET_KEY);
        req.currentUser = currentUser;
        next();
    }catch(err){
        return res.status(401).json({message: "Invalid token"});
    }
}

module.exports = verifyToken;