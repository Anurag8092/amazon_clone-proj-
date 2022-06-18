const mongoose = require("mongoose")
const DB = process.env.MONGOURL;

mongoose.connect(DB).then(() => {
    console.log("DB connected");
}).catch(err => {
    console.log(err);
})
