import dotenv from "dotenv";
import mongoose from "mongoose";
import express from "express";
import connectDB from "./src/db/index.ts";

dotenv.config({path : "./env"});
const app = express();

connectDB();

app.on("error", (error) => {
  throw error;
});

app.listen(process.env.PORT, () => {
  console.log(`Server listening on ${process.env.PORT}`);
});
