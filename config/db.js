import mongoose from "mongoose";

let cached = global.mongoose;
if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

export const connectDB = async () => {
  if (cached.conn) {
    console.log("Cached mongodb is called!");
    return cached.conn;
  }

  if (!cached.promise) {
    try {
      mongoose.set("strictQuery", true);
      cached.promise = await mongoose.connect(process.env.MONGO_URI);
      console.log(`MongoDB Connected: ${cached.promise.connection.host}`);
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
  }
  cached.conn = await cached.promise;
  return cached.conn;
};
