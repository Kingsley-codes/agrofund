import bcrypt from "bcrypt";
import User from "../models/userModel.js";
import jwt from "jsonwebtoken";
import validator from "validator";



// Helper function to sign JWT tokens for User
const signToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

// User Registration
export const registerUser = async (req, res) => {
  try {
    const { fullName, email, password, confirmPassword, phone } = req.body;

    // Validate user input
    if (!email || !password || !confirmPassword || !fullName || !phone) {
      return res.status(400).json({
        status: "fail",
        message: "All fields are required",
      });
    }

    // Check if passwords match
    if (password !== confirmPassword) {
      return res.status(400).json({
        status: "fail",
        message: "Passwords do not match",
      });
    }

    // Validate password strength
    if (
      !validator.isStrongPassword(password, {
        minLength: 8,
        minUppercase: 1,
        minSymbols: 1,
        minNumbers: 1,
      })
    ) {
      return res.status(400).json({
        status: "fail",
        message:
          "Password must be at least 8 characters and include an uppercase letter, number, and symbol",
      });
    }

    if (!phone || !/^\d{11}$/.test(phone)) {
      return res.status(400).json({
        status: "fail",
        message: "Phone number must be exactly 11 digits",
      });
    }

    // Check if phone number already exists - NEW CHECK
    const existingPhoneUser = await User.findOne({ phone });
    if (existingPhoneUser) {
      return res.status(400).json({
        status: "fail",
        message: "Phone number already registered",
      });
    }

    // Validate email format
    if (!validator.isEmail(email)) {
      return res.status(400).json({
        status: "fail",
        message: "Invalid email format",
      });
    }
    // Validate phone number format
    if (!phone || !/^\d{11}$/.test(phone)) {
      return res.status(400).json({
        status: "fail",
        message: "Phone number must be exactly 11 digits"
      });
    }

    // Validate full name
    if (!fullName || fullName.trim().length < 3) {
      return res.status(400).json({
        status: "fail",
        message: "Full name must be at least 3 characters long"
      });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 12);

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser && existingUser.isVerified) {
      return res.status(400).json({
        status: "fail",
        message: "User is already registered and verified",
      });

    } else {
      // Create new user
      await User.create({
        email,
        password: hashedPassword,
        fullName,
        phone,
      });
    }

    // Respond with success
    res.status(201).json({
      status: "success",
      message: "User registered successfully",
    });
  } catch (err) {
    console.error("Error registering user:", err);
    res.status(500).json({
      status: "error",
      message: "Registration failed",
      error: err.message,
      stack: process.env.NODE_ENV === "development" ? err.stack : undefined,
    });
  }
};


// User Login
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        status: "fail",
        message: "Email and password required"
      });
    }

    const user = await User.findOne({ email }).select('+password');

    // Check if user exists and has a password
    if (!user || !user.password) {
      return res.status(401).json({
        status: "fail",
        message: "Invalid credentials"
      });
    }

    // Verify both password and user.password are defined before comparing
    if (!password || !user.password) {
      return res.status(401).json({
        status: "fail",
        message: "Invalid credentials"
      });
    }

    // Compare passwords
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({
        status: "fail",
        message: "Invalid credentials"
      });
    }

    if (!user.isVerified) {
      return res.status(401).json({
        status: "fail",
        message: "Account not verified"
      });
    }

    const token = signToken(user._id);
    user.password = undefined;

    const response = {
      status: "success",
      token,
      data: { user }
    };

    res.status(200).json(response);

  } catch (err) {
    console.error('Login error:', err);

    res.status(500).json({
      status: "error",
      message: "Login failed due to server error",
      details: err.message,
      stack: process.env.NODE_ENV === 'development' ? err.stack : undefined
    });
  }
};





