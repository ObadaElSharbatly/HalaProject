import mongoose from "mongoose";

export const connectDb = async () =>
  await mongoose.connect(process.env.DB_CONNECTION_STRING);
// export const disconnectDb = mongoose.disconnect();
