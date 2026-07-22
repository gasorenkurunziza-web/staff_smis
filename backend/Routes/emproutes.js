import express from "express";
import upload from "../Middleware/multer.js";
import {
  getAllEmployees,
  createEmployee,
} from "../Controller/empcontroller.js";

const emproutes = express.Router();

emproutes.post("/register", upload.single("photo"), createEmployee);
emproutes.get("/all", getAllEmployees);

export default emproutes;
