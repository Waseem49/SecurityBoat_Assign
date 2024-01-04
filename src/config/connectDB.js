import mongoose from "mongoose";

export default async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://mdwaseem:mdwaseem@cluster0.tdsn7wd.mongodb.net/SecurityBoat"
    );
    console.log("connection established");
  } catch (error) {
    console.log(error.message);
  }
};
