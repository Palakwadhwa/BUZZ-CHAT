import mongoose from "mongoose";  
export const db = async () => {
  try {
    console.log("MONGO_URI:", process.env.MONGO_URI); // DEBUG
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB Connected ✅");
  } catch (error) {
    console.log("MongoDB Connection Failed ❌", error.message);
  }
};