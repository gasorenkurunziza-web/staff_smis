import express from "express";
import upload from "../Middleware/multer.js";
import {
  getAllEmployees,
  createEmployee,
  loginAdmin,
} from "../Controller/empcontroller.js";

const emproutes = express.Router();

emproutes.post("/register", upload.single("photo"), createEmployee);
emproutes.get("/all", getAllEmployees);
emproutes.post("/login", loginAdmin);

export default emproutes;
