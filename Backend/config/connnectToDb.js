const mongoose = require("mongoose");
module.exports = async()=>{
try{
await mongoose.connect(process.env.PORTDATA)
 console.log("connect to mongodb ");
}catch(err){
    console.log("not connect to db",err);
}

}