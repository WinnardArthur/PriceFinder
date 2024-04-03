"use server";

import nodemailer from "nodemailer";

import { EmailContent } from "@/types";

const transporter = nodemailer.createTransport({
  pool: true,
  service: "hotmail",
  port: 2525,
  auth: {
    user: "winnardarthur7@gmail.com",
    pass: process.env.EMAIL_PASSWORD,
  },
  maxConnections: 1,
});

export const sendEmail = async (
  emailContent: EmailContent,
  sendTo: string[]
) => {
  const mailOptions = {
    from: "winnardarthur7@gmail.com",
    to: sendTo,
    subject: emailContent.subject,
    html: emailContent.body,
  };

  transporter.sendMail(mailOptions, (error: any, info: any) => {
    if (error) return console.log({ error });

    console.log("Email sent: ", info);
  });
};
