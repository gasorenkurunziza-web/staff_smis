import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const employeeSchema = new mongoose.Schema({
  empstatus: {
    type: String,
    required: true,
    enum: ["Active", "Not active"],
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
    enum: ["Male", "Female"],
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
    type: String,
  },
  jobtitle: {
    type: String,
    required: true,
    enum: [
      "Coordinator",
      "Director of Health and Social Rehabilitation",

      "Director of Vocational Training",
      "Clinical Psychology",
      "Trainer",
      "Assistant Trainer",
      "Mental Nurse Officer",
      "Community Environmental Health Officer",
      "Database and ICT",
      "Chief Cook",
      "Cook",
      "Nurse",
      "Laboratory Technician",
      "Electrician",
      "Logistic Officer",
      "Production Officer",
      "Navigator",
      "Patient Attendant",
    ],
  },
  unit: {
    type: String,
    required: true,
    enum: [
      "Administration",
      "Vocational Training",
      "Health and Social Rehabilitation",
    ],
  },
  photo: {
    type: String,
    required: true,
  },
  compassign: {
    type: String,
    required: true,
  },
  edlevel: {
    type: String,
    required: true,
    enum: [
      "Advanced Diploma (S6)",
      "Bachelor (A1)",
      "Bachelor (A0)",
      "Masters",
      "PhD",
    ],
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
