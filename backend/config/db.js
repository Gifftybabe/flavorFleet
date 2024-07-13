import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose.connect('mongodb+srv://Gifftybabe:Gifftybabe2210@cluster0.oa9ep6o.mongodb.net/flavor-fleet').then(()=>console.log("DB Connected"))
}