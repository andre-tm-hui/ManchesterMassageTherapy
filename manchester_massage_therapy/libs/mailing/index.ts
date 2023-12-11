import nodemailer from 'nodemailer';

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD,
    }})

export async function sendEmails(email: string, name: string, message: string, subject: string, phone: string) {
  let mailOptions = [
    {
      from: process.env.EMAIL_USERNAME,
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
      from: process.env.EMAIL_USERNAME,
      to: process.env.EMAIL_USERNAME,
      subject: `New message from ${name}: ${subject}`,
      text: `Name: ${name} \n Email: ${email} \n Phone: ${phone ?? 'N/A'} \n Message: ${message}`
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

