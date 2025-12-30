import mongoose from "mongoose";
import validator from "validator";


const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      trim: true,
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      validate: {
        validator: validator.isEmail,
        message: "Invalid email format",
      },
    },
    phone: {
      type: String,
      sparse: true,
      trim: true,
      validate: {
        validator: (value) => validator.isMobilePhone(value, "any"),
        message: "Invalid phone number format",
      },
    },
    password: {
      type: String,
      minlength: 8,
    },
    profilePhoto: {
      publicId: { type: String },
      url: { type: String }
    },
    status: {
      type: String,
      enum: ["active", "suspended"],
      default: "active",
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    suspendReason: {
      type: String
    },
    address: {
      type: String
    },
    gender: {
      type: String,
      enum: ["male", "female"],
    }
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
