import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  auth: {
    user: process.env.SMTP_USER,
    password: process.env.SMTP_PASS,
  },
});

export const sendEmail = async (options) => {
  return await transporter.sendMail(options);
};
