import nodemailer from 'nodemailer';

// TODO: add timeout based on IP? captcha? just to prevent spam
export const dynamic = 'force-dynamic'

const transporter = nodemailer.createTransport({
    port: parseInt(process.env.EMAIL_PORT!),
    host: process.env.EMAIL_HOST,
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD,
    }})

export async function POST(req: Request) {
  await new Promise((resolve, reject) => {
    transporter.verify(function(error, success) {
      if (error) {
        console.log(error);
        reject(error);
      } else {
        console.log("Server is ready to take our messages");
        resolve(success);
      }
  })});

  const { name, email, phone, subject, message } = await req.json();

  await new Promise((resolve, reject) => {
    transporter.sendMail({
      from: "Manchester Massage Therapy <support@manchestermassagetherapy.co.uk>",
      to: email,
      subject: `Thanks for getting in touch, ${name}!`,
      text: 
      `Hi ${name}!
      \n\nThanks for getting in touch. We'll get back to you as soon as possible. 
      \n\nFor your reference, your message was: \n\nSubject: ${subject}\n${message}
      \n\nBest regards, 
      \nThe team at Manchester Massage Therapy
      \n\n\nFeel free to reply to this email if you missed anything in your original message.`
    }, (error, info) => {
      if (error) {
        console.error(error);
        reject(error);
      } else {
        console.log(info);
        resolve(info);
      }
    })
  })

  await new Promise((resolve, reject) => {
    transporter.sendMail({
      from: "Manchester Massage Therapy <support@manchestermassagetherapy.co.uk>",
      to: process.env.EMAIL_USERNAME,
      subject: `New message from ${name}: ${subject}`,
      text: `Name: ${name} \nEmail: ${email} \nPhone: ${phone ?? 'N/A'} \nMessage: ${message}`
    }, (error, info) => {
      if (error) {
        console.error(error);
        reject(error);
      } else {
        console.log(info);
        resolve(info);
      }
    })
  })

  return Response.json({ message: "OK", status: 200 });
}