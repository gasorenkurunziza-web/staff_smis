import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import adminModel from "../Model/adminmodel.js";

const createToken = (adminId) => {
  return jwt.sign({ id: adminId }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });
};

// Creates a new admin account. In a real deployment you'd want this
// locked down (e.g. only callable by an existing admin, or run once
// during setup) rather than left open to the public.
const registerAdmin = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "Name, email and password are all required",
      });
    }

    const existing = await adminModel.findOne({ email });
    if (existing) {
      return res.status(409).json({
        success: false,
        message: "An admin with this email already exists",
      });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const admin = await adminModel.create({
      name,
      email,
      password: hashedPassword,
    });

    const token = createToken(admin._id);

    return res.status(201).json({
      success: true,
      message: "Admin account created successfully",
      token,
      admin: { id: admin._id, name: admin.name, email: admin.email },
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, message: error.message });
  }
};

const loginAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Email and password are required",
      });
    }

    const admin = await adminModel.findOne({ email });
    if (!admin) {
      // Same message as a wrong password, on purpose — don't reveal
      // whether the email exists in the system.
      return res.status(401).json({
        success: false,
        message: "Invalid email or password",
      });
    }

    const passwordMatches = await bcrypt.compare(password, admin.password);
    if (!passwordMatches) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password",
      });
    }

    const token = createToken(admin._id);

    return res.status(200).json({
      success: true,
      message: "Login successful",
      token,
      admin: { id: admin._id, name: admin.name, email: admin.email },
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, message: error.message });
  }
};

export { registerAdmin, loginAdmin };
