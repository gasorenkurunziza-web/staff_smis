import mongoose from "mongoose";

const adminSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      // stored as a bcrypt hash, never plain text
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);

export default mongoose.model("adminModel", adminSchema);
