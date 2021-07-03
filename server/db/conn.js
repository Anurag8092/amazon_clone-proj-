const mongoose = require("mongoose")
const DB = process.env.MONGOURL;

mongoose.connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}).then(() => {
    console.log("DB connected");
}).catch(err => {
    console.log(err);
})
