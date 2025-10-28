import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const mongoUri = process.env.MONGO_URI;
    if (!mongoUri) {
      throw new Error("Mongodb url must be string! please pass a string ");
    }
    await mongoose.connect(mongoUri);
    console.log("MongoDB is connected successfully");
  } catch (error) {
    console.log(error);
    console.log("Got a error in connecting mongoDb");
  }
};
