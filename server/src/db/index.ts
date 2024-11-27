import mongoose from "mongoose";
import { DB_NAME } from "../constant";

// async await because to commnicate with the db (which can be anywhere on the earth)

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    console.log(
      `\n MongoDB on fire 🔥 \n ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.error("Error ,", error);
    process.exit(1);
  }
};

export default connectDB;
