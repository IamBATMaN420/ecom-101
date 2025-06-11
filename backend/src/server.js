import express from "express"
import connectDb from "./config/DB.js";

const app = express()

const PORT = process.env.PORT || 3000;

connectDb();

app.listen(PORT, () => {
  console.log(`server is runnning on ${PORT}`)
})