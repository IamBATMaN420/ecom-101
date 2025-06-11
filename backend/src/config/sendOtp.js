import { createTransport } from "nodemailer"
export const sendOtp = async ({ email, subject, otp }) => {
  const transport = createTransport({
    host: "smtp.gamil.com",
    port: 465,
    auth: {
      user: process.env.gmail,
      pass: process.env.password
    }

  })
  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>OTP Verification</title>
  <style>
    body {
      margin: 0;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      background: linear-gradient(135deg, #f0f4ff, #dce1f5);
    }

    .container {
      background-color: #fff;
      padding: 40px 30px;
      border-radius: 12px;
      box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
      text-align: center;
      max-width: 400px;
      width: 90%;
    }

    h1 {
      color: #4b0082;
      margin-bottom: 10px;
      font-size: 28px;
    }

    p {
      color: #444;
      font-size: 16px;
      margin: 10px 0;
    }

    .otp {
      font-size: 40px;
      font-weight: bold;
      letter-spacing: 4px;
      color: #6a5acd;
      margin: 30px 0 10px;
    }

    .footer {
      font-size: 12px;
      color: #aaa;
      margin-top: 20px;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>OTP Verification</h1>
    <p>Hello <strong>${email}</strong>,</p>
    <p>Your One-Time Password (OTP) for account verification is:</p>
    <div class="otp">${otp}</div>
    <p class="footer">Please do not share this code with anyone. This code is valid for the next 10 minutes.</p>
  </div>
</body>
                </html>`
  await transport.sendMail({
    from: process.env.gmail,
    to: email,
    subject,
    html
  })
}


