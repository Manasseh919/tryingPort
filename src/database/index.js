import mongoose from "mongoose";

export default async function connectToDB() {
  try {
    await mongoose.connect(
      "mongodb+srv://manasseh919:8ff4P3NMgaQQzERa@cluster0.ehrqyjq.mongodb.net/"
    );
    // console.log("Database connected succesfully");
  } catch (e) {
    console.log(e);
  }
}
