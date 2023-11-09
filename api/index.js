import express from "express";
import mongoose, { mongo } from "mongoose";
import dotenv from "dotenv";
import userRouter from './routes/user.router.js'

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL,{ useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("database connected successfully");
  })
  .catch((error) => {
    console.log(error);
  });

const app = express();

app.listen(3000, () => {
  console.log("server is running on 3000!!!");
});

app.use("/api/user",userRouter);