import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const employeeSchema = new mongoose.Schema({
  empstatus: {
    type: String,
    required: true,
    enum: ["active", "inactive"],
    default: "active",
  },
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  gender: {
    type: String,
    required: true,
  },
  nid: {
    type: Number,
    unique: true,
    required: true,
  },
  phone: {
    type: Number,
    unique: true,
    required: true,
  },
  empldate: {
    type: Date,
    default: Date.now,
  },
  jobtitle: {
    type: String,
    required: true,
  },
  unit: {
    type: String,
    required: true,
  },
  photo: {
    type: String,
    required: true,
  },
  compassign: {
    type: Boolean,
    default: false,
    required: true,
  },
  edlevel: {
    type: String,
    required: true,
  },
  spec: {
    type: String,
    required: true,
  },
  district: {
    type: String,
    required: true,
    unique: true,
  },
  sector: {
    type: String,
    required: true,
    unique: true,
  },
  cell: {
    type: String,
    required: true,
    unique: true,
  },
  village: {
    type: String,
    required: true,
    unique: true,
  },
  nextofkin: {
    type: String,
    required: true,
  },
  nextofkinphone: {
    type: Number,
    required: true,
  },
  nextofkinrelation: {
    type: String,
    required: true,
  },
});

export default mongoose.model("employeeModel", employeeSchema);
