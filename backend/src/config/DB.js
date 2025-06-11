
import mongoose from "mongoose"


const URI = process.env.MONGO_URI

if (!URI) {
  throw new Error("mongoo connection URI is not present")
}

async function connectDb() {
  try {
   
    await mongoose.connect(URI)
    console.log(`db connection is done`)
  } catch (error) {
    console.log(`Db connection is in prblm , the error is ${error.message} `)
    process.exit(1);
  }
}

export default connectDb
