import express from "express";
import mongoose, { mongo } from "mongoose";
import dotenv from "dotenv";

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
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
