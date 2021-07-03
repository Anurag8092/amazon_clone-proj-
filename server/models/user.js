const mongoose = require("mongoose");
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    products: [],
    tokens: [
        {
            token:{
                type: String,
                required: true
            }
        }
    ]
})


//hash password
userSchema.pre("save", async function(next){
    if(this.isModified("password")){   //whenever password is changed, this function will be called.... before "user.save()" is called
        this.password = await bcrypt.hash(this.password, 12);
      
    }
    next();
});

//generate jwt
userSchema.methods.generateAuthToken = async function(){
    try{
        // jwt.sign(payload, secretKey, [options, callback])....payload should be unique
        let token = jwt.sign({_id:this._id}, process.env.SECRET_KEY);
        this.tokens = this.tokens.concat({token});
        await this.save();
        return token;
    }catch(err){
        console.log(err);
    }
}

const User = new mongoose.model("User", userSchema);

module.exports = User;