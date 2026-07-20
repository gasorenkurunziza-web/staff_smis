import express from "express";
import { registerAdmin, loginAdmin } from "../Controller/admincontroller.js";

const adminroutes = express.Router();

adminroutes.post("/register", registerAdmin);
adminroutes.post("/login", loginAdmin);

export default adminroutes;
