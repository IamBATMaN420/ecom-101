import mongoose from "mongoose";
import { type } from "os";

const otpSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  OTP: {
    type: Number,
    required: true,
  },
  expiredAt: {
    type: Date,
    default: () => new Date(Date.now() + 5 * 60 * 1000),
    index: { expires: "5m" }

  },

}, {
  timestamps: true
})

