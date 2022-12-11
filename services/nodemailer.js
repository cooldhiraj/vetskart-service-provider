const nodemailer = require("nodemailer");
const {template} = require('./template')
const {infoTemplate} = require('./infoVetsKart')

module.exports.sendMail = async (fullName, email) => {

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  
  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: 'info@vetskart.com', // sender address
    to: `${email}`, // list of receivers
    subject: "Joining Form Confirmation", // Subject line
    //text: "Hello world?", // plain text body
    html: template(fullName), // html body
  }).catch(err => console.log("sending mail err", err));

  console.log("Message sent: %s", info.messageId);


  return info
}

module.exports.sendMailVetsKart = async (fullName, email, mobile, pincode) => {

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  
  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: 'info@vetskart.com', // sender address
    to: `info@vetskart.com`, // list of receivers
    subject: "New user registration", // Subject line
    //text: "Hello world?", // plain text body
    html: infoTemplate(fullName, email, mobile, pincode), // html body
  }).catch(err => console.log("sending mail err", err));

  console.log("Message sent: %s", info.messageId);


  return info
}
