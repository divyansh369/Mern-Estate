import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv';
import userRouter from './routes/user.router.js'
import authRouter from './routes/auth.route.js'
import cookieParser from 'cookie-parser';

dotenv.config();
// require('dotenv').config();

mongoose.connect(process.env.MONGO_URL)
.then(() => {
   console.log("database connected successfully");
})
.catch((error) => {
   console.log(error);
   });
   

const app = express();
app.use(express.json());

app.use(cookieParser());

app.listen(3000, () => {
  console.log("server is running on 3000!!!");
});

app.use("/api/user",userRouter);
app.use("/api/auth",authRouter)


//middleware is created to handle error
app.use((err,req,res,next) => {
   const statusCode = err.statusCode || 500;
   const message = err.message || "Internal server error"
   return res.status(statusCode).json({
      success:false,
      statusCode,
      message:message
   })
})