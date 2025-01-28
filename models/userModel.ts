import mongoose, { Schema, model, models } from "mongoose";

const UserSchema = new Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    phone: { type: String },
    location: { type: String },
    role: { type: String, enum: ["user1", "user2"], required: true },
  },
  { timestamps: true }
);

// Correct the model name to "User" consistently
const User = models.User || model("User", UserSchema);

export default User;
