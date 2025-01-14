import mongoose from "mongoose";

export default async function connectToDB() {
  try {
    await mongoose.connect(
      "mongodb+srv://ardi271:R5nWH7HL22OzVUa8@cluster0.b5nkj.mongodb.net/"
    );
    console.log("Database connected successfully");
  } catch (error) {
    console.log(error);
  }
}
