const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const isAuth = require("../middleware/isAuth");

require("../db/conn");
const User = require("../models/user");



router.get("/getdata", isAuth, async (req, res) => {
    res.send(req.adminUser);
})


router.post("/postorders", isAuth, async (req, res) => {
    const data = req.body.items
    const { email } = req.body
    try{
       return await User.findOneAndUpdate({ email }, {
            $push:{products: data}
        })
            .exec((err, result)=> {
                if(err){
                    return res.status(422).json({error:err})
                }else{
                    res.json(result)
                }
        })

    }catch(err){
        console.log(err)
    }
    

})

router.get("/orderhistory", isAuth, (req, res) => {
    const email = req.adminUser.email;
    User.findOne({email}, (err, result) => {
        if(err){
            res.send(err);
        }
        res.send(result.products);
    })
})




router.post("/signup", async (req, res) => {
    const {name, email, password} = req.body;

    if(!name || !email || !password){
        return res.status(422).json({message: "please add all fields"})
    }

    try{
     const emailExist = await  User.findOne({ email });
     if(emailExist){
        return res.status(422).json({error: "email already exists"})
    }else{
        const user = new User({
            name, 
            email, 
            password
        })
         await user.save();
         res.status(201).json({message:"User created"});
    }

    } catch(err){
        console.log(err)
    }
});


router.post("/signin", async (req, res) => {
    try{
        const {email, password} = req.body;

        if(!email || !password){
            return res.status(400).json({message: "please add all fields"})
        }

        const userLogin = await User.findOne({ email })
        
        if(userLogin){
            const isMatch = await bcrypt.compare(password, userLogin.password)
            
            const token = await userLogin.generateAuthToken();
            
            //store the token in the cookies
            // cookie(name, value)
            res.cookie("jwtoken", token, {
                expires: new Date(Date.now() + 25892000000), //user's token will expire after 30 days from the day of login
                httpOnly: true
            });

            if(!isMatch){
                res.status(400).json({error: "invalid"});
            }
            const {_id, name, email} = userLogin;
            res.json({message:"Login success", user:{_id, name, email}});
        }else{
            res.status(400).json({error: "invalid"});
        }
    } catch (err){
        console.log(err)
    }
});



router.get("/about", isAuth, (req, res) => {
    res.send(req.adminUser);
})

router.get("/logout", isAuth, (req, res) => {
    res.clearCookie("jwtoken", {
        path:"/"
    });
    
    res.status(200).send("logged out");
})




module.exports = router;