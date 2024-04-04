"use server";

import nodemailer from "nodemailer";

import { EmailContent } from "@/types";
import Mail from "nodemailer/lib/mailer";

const { SMTP_EMAIL, SMTP_PASSWORD } = process.env;

const transport = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: SMTP_EMAIL,
    pass: SMTP_PASSWORD,
  },
});

export const sendEmail = async (
  emailContent: EmailContent,
  sendTo: string[]
) => {
  try {
    const isTransportVerified = await transport.verify();
    console.log({ isTransportVerified });
  } catch (error) {
    console.log({ error });
    return;
  }

  const mailOptions = {
    from: SMTP_EMAIL,
    to: sendTo,
    subject: emailContent.subject,
    html: emailContent.body,
  };

  try {
    const sendResult = await transport.sendMail(mailOptions);
    // console.log({ sendResult });
  } catch (error) {
    console.log({ error });
  }
};

// const transporter = nodemailer.createTransport({
//   pool: true,
//   service: "hotmail",
//   port: 2525,
//   auth: {
//     user: "winnardarthur7@gmail.com",
//     pass: process.env.EMAIL_PASSWORD,
//   },
//   maxConnections: 1,
// });

// export const sendEmail = async (
//   emailContent: EmailContent,
//   sendTo: string[]
// ) => {
//   const mailOptions = {
//     from: "winnardarthur7@gmail.com",
//     to: sendTo,
//     subject: emailContent.subject,
//     html: emailContent.body,
//   };

//   transporter.sendMail(mailOptions, (error: any, info: any) => {
//     if (error) return console.log({ error });

//     console.log("Email sent: ", info);
//   });
// };
