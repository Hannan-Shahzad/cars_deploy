import mongoose from "mongoose";

let isConnected = false; // Track the connection status

export const dbConnect = async () => {
  if (isConnected) return;

  try {
    const uri = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/carss";
    if (!uri) {
      throw new Error("Please define the MONGODB_URI environment variable");
    }

    const db = await mongoose.connect(uri, {
      dbName: "carss", // This option is still valid
    });

    isConnected = !!db.connections[0].readyState;
    console.log("MongoDB connectedddddd successfully!");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    throw new Error("Failed to connect to MongoDB");
  }
};
