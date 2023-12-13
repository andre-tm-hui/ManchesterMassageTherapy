import nodemailer from 'nodemailer';

export const dynamic = 'force-dynamic'

let transporter = nodemailer.createTransport({
    port: parseInt(process.env.EMAIL_PORT!),
    host: process.env.EMAIL_HOST,
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD,
    }})

export async function POST(req: Request) {
   const { name, email, phone, subject, message } = await req.json();
   let mailOptions = [
    {
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
    }, 
    {
      from: "Manchester Massage Therapy <support@manchestermassagetherapy.co.uk>",
      to: process.env.EMAIL_USERNAME,
      subject: `New message from ${name}: ${subject}`,
      text: `Name: ${name} \n Email: ${email} \n Phone: ${phone ?? 'N/A'} \n Message: ${message}`
    }
  ]

  mailOptions.forEach(mailOption => {
    transporter.sendMail(mailOption, function(error, info){
      if (error) {
        return Response.json({ message: error, status: 400 });
      } else {
        console.log('Email sent: ' + info.response)
      }
    })    
  });

  return Response.json({ message: "success", status: 200 });
}