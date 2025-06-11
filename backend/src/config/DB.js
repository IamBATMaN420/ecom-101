import mongoose from "mongoose"
import dotenv from "dotenv"

dotenv.config()

const URI = process.env.MONGO_URI

if (!URI) {
  throw new Error("MONGO_URI is not defined in environment variables");
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
