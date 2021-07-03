const jwt = require("jsonwebtoken")
const User = require("../models/user")

const isAuth = async (req, res, next) => {
    
    try{
        const token = req.cookies.jwtoken;
        
        const isVerified = jwt.verify(token, process.env.SECRET_KEY)
        const adminUser = await User.findOne({_id:isVerified._id, "tokens.token":token});
        if(!adminUser){
            throw new Error("User not found")
        }
        req.token = token;
        req.adminUser = adminUser;
        req.userId = adminUser._id;
        next();
    }catch(err){
        res.status(401).send("Unauthorized")
        console.log(err);
    }
}

module.exports = isAuth;