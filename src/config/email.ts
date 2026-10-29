import nodemailer from 'nodemailer';

const port = Number(process.env.EMAIL_PORT) || 465;

export const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST || 'smtp.hostinger.com',
  port,
  secure: port === 465,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export const mailOptions = {
  from: process.env.EMAIL_USER,
  to: process.env.EMAIL_USER,
};
