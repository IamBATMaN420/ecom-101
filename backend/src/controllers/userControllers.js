import { sendOtp } from "../config/sendOtp.js";
import { TryCatch } from "../config/trycatch.js"
import { otpModel } from "../models/otpSchema.js";

export const loginUser = TryCatch(async (req, res) => {
  const { email } = req.body;
  const subject = "Ecommerce App"
  const otp = Math.floor(Math.random() * 1000000)
  const prvOtp = otpModel.findOne({
    email,
  })
  if (prvOtp) {
    await prvOtp.deleteOne()
  }
  await sendOtp({ email, subject, otp })
  await otpModel.create(email, otp)
  res.json({
    message:"OTP will be send to Email"
  })
})