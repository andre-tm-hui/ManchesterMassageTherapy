import nodemailer from 'nodemailer';

let transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD,
    }})

export default function POST(req: any, res: any) {
  let mailOptions = [
    {
      from: process.env.EMAIL_USERNAME,
      to: req.email,
      subject: `Thanks for getting in touch, ${req.name}!`,
      text: 
      `Hi ${req.name}!
      \n\nThanks for getting in touch. We'll get back to you as soon as possible. 
      \n\nFor your reference, your message was: \n\nSubject: ${req.subject}\n${req.message}
      \n\nBest regards, 
      \nThe team at Manchester Massage Therapy
      \n\n\nFeel free to reply to this email if you missed anything in your original message.`
    }, 
    {
      from: process.env.EMAIL_USERNAME,
      to: process.env.EMAIL_USERNAME,
      subject: `New message from ${req.name}: ${req.subject}`,
      text: `Name: ${req.name} \n Email: ${req.email} \n Phone: ${req.phone ?? 'N/A'} \n Message: ${req.message}`
    }
  ]

  mailOptions.forEach(mailOption => {
    transporter.sendMail(mailOption, function(error, info){
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response)
      }
    })    
  });
}