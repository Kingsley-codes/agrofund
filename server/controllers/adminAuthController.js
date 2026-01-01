import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import Admin from "../models/adminModel.js";



// Helper function to sign JWT tokens for Admin
const signToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN,
    });
};



// Admin Login
export const adminLogin = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({
                status: "fail",
                message: "Email and password required"
            });
        }

        const admin = await Admin.findOne({ email }).select('+password');

        // Check if admin exists and has a password
        if (!admin || !admin.password) {
            return res.status(401).json({
                status: "fail",
                message: "Invalid credentials"
            });
        }

        // Verify both password and admin.password are defined before comparing
        if (!password || !admin.password) {
            return res.status(401).json({
                status: "fail",
                message: "Invalid credentials"
            });
        }

        // Compare passwords
        const isPasswordValid = await bcrypt.compare(password, admin.password);
        if (!isPasswordValid) {
            return res.status(401).json({
                status: "fail",
                message: "Invalid credentials"
            });
        }

        // if (!admin.isVerified) {
        //   return res.status(401).json({
        //     status: "fail",
        //     message: "Account not verified"
        //   });
        // }

        const token = signToken(admin._id);
        admin.password = undefined;

        const response = {
            status: "success",
            token,
            data: { admin }
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





