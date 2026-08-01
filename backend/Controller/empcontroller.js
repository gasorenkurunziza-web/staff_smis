import employeeModel from "../Model/usermodel.js";
import cloudinary from "../Config/cloudinary.js";
import usermodel from "../Model/usermodel.js";

export const loginAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;
    //check email
    if (!email || !password)
      return res.status(400).json({
        message: "Email and Password are required",
      });
    // find email in db
    const employee = await usermodel.findOne({ email });
    if (!email || !password) {
      return res.status(401).json({
        message: "Email not found",
      });
    }
    //compare password
    if (employee.password !== password) {
      return res.status(401).json({
        message: "Password is incorrect",
      });
    }
    // login successfully
    res.status(200).json({
      message: "Login Successfully",
      success: true,
    });
  } catch (error) {
    console.log("Login Failed", error);
    res.status(500).json({
      message: "server error",
    });
  }
};
const createEmployee = async (req, res) => {
  try {
    const {
      empstatus,
      firstname,
      lastname,
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
        success: false,
        message: "Please upload a photo",
      });
    }

    const base64 = `data:${req.file.mimetype};base64,${req.file.buffer.toString("base64")}`;

    const result = await cloudinary.uploader.upload(base64, {
      folder: "employee_photos",
    });
    // generating email
    let make_email = `${firstname.toLowerCase()}+.${lastname.toLowerCase()}@irc.gov.rw`;
    let email = make_email;
    //checking email uniqueness
    let checkemailexist = await usermodel.findOne({ email });
    while (checkemailexist) {
      const randomnumber = Math.floor(Math.random() * 1000);
      make_email = `${firstname.toLowerCase()}.${lastname.toLowerCase()}${randomnumber}@irc.gov.rw`;
      let checkemailexist = await usermodel.findOne({ email });
    }

    let generalPassword = "Irc";
    let password = generalPassword.toLowerCase();

    let existingPassword = await usermodel.findOne({ password });

    while (existingPassword) {
      const randomNumber = Math.floor(100000 + Math.random() * 900000);
      password = `${generalPassword.toLowerCase()}${randomNumber}`;
      existingPassword = await usermodel.findOne({ password });
    }

    const employee = await employeeModel.create({
      empstatus: empstatus || "Active",
      firstname: firstname || "",
      lastname: lastname || "",
      email: email || "",
      password: password || "",
      gender: gender || "Male",
      nid: nid ? Number(nid) : 0,
      phone: phone ? Number(phone) : 0,
      empldate: empldate || "",
      jobtitle: jobtitle || "Coordinator",
      unit: unit || "Administration",
      compassign: compassign || "",
      edlevel: edlevel || "Bachelor (A0)",
      spec: spec || "",
      district: district || "",
      sector: sector || "",
      cell: cell || "",
      village: village || "",
      nextofkin: nextofkin || "",
      nextofkinphone: nextofkinphone ? Number(nextofkinphone) : 0,
      nextofkinrelation: nextofkinrelation || "",
      photo: result.secure_url,
    });
    console.log(employee);
    return res.status(201).json({
      success: true,
      message: "Employee created successfully",
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
