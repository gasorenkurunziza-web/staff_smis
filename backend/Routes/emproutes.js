import express from "express";
import upload from "../Middleware/multer.js";
import protect from "../Middleware/auth.js";
import {
  getAllEmployees,
  createEmployee,
} from "../Controller/empcontroller.js";
const emproutes = express.Router();

emproutes.post("/register", protect, upload.single("photo"), createEmployee);
emproutes.get("/all", protect, getAllEmployees);

export default emproutes;
