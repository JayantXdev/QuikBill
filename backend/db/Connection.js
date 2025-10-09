const mongoose=require("mongoose")

const Connection=async()=>{
  try {
    await mongoose.connect(process.env.MONGODB_CONNECTION_STRING)
   return console.log("Connected to MongoDB");
  } catch (error) {
   console.log("Error");
   
  }
}
module.exports=Connection