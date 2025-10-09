const mongoose=require("mongoose")

const Connection=async()=>{
  try {
    await mongoose.connect(process.env.MONGODB_CONNECTION_STRING)
   return console.log("Connected to MongoDB");
<<<<<<< HEAD
   // hello
=======
<<<<<<< HEAD
//hhhh

=======
  } catch (error) {
   console.log("Error");
   
  }
>>>>>>> origin/ansh-backend
>>>>>>> jayant-backend
}
module.exports=Connection