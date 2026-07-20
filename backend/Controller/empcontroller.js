import employeeModel from "../Model/usermodel.js";
import cloudinary from "../Config/cloudinary.js";

const createEmployee = async (req, res) => {
  try {
    const {
      empstatus,
      firstname,
      lastname,
      email,
      gender,
      nid,
      phone,
      empldate,
      jobtitle,
      unit,
      compassign,
      edlevel,
      spec,
      district,
      sector,
      cell,
      village,
      nextofkin,
      nextofkinphone,
      nextofkinrelation,
    } = req.body;

    if (!req.file) {
      return res.status(400).json({
        message: "Please upload a photo",
      });
    }

    const base64 = `data:${req.file.mimetype};base64,${req.file.buffer.toString("base64")}`;

    const result = await cloudinary.uploader.upload(base64, {
      folder: "employee_photos",
    });

    const employee = await employeeModel.create({
      empstatus,
      firstname,
      lastname,
      email,
      gender,
      nid,
      phone,
      empldate,
      jobtitle,
      unit,
      compassign,
      edlevel,
      spec,
      district,
      sector,
      cell,
      village,
      nextofkin,
      nextofkinphone,
      nextofkinrelation,
      photo: result.secure_url,
    });

    return res.status(201).json({
      success: true,
      message: "Employee created successfully",
      success: true,
      employee,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
const getAllEmployees = async (req, res) => {
  try {
    const employees = await employeeModel.find();
    res.status(200).json(employees);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};
export { createEmployee, getAllEmployees };
