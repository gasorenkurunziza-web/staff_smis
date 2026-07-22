import employeeModel from "../Model/usermodel.js";
import cloudinary from "../Config/cloudinary.js";
import usermodel from "../Model/usermodel.js";

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
      const randomnumber = Math.floor(0 + randomnumber);
      make_email = `${firstname.toLowerCase()}+.${lastname.toLowerCase()}${randomnumber}@irc.gov.rw`;
      let checkemailexist = await usermodel.findOne({ email });
    }
    const employee = await employeeModel.create({
      empstatus: empstatus || "Active",
      firstname: firstname || "",
      lastname: lastname || "",
      email: email || "",
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
