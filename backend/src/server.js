import express from "express"
import connectDb from "./config/DB.js";
import userRoutes from "./routes/userRoutes.js";

const app = express()

const PORT = process.env.PORT || 3000;

connectDb();

app.use("/api", userRoutes)

app.listen(PORT, () => {
  console.log(`server is runnning on ${PORT}`)

})