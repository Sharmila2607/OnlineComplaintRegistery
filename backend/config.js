const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/Sharmi")
.then(()=>{
   console.log("connected to mongodb")
})