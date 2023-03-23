const nodemailer = require("nodemailer");
require("dotenv").config();

const { EMAIL, EMAIL_PASSWORD } = process.env;

const sendBuyMail = (userEmail) => {
  // Configurar el transportador SMTP para enviar correos electrónicos
  const transporter = nodemailer.createTransport({
    host: "smtp.office365.com",
    port: 587,
    secure: false,
    auth: {
      user: EMAIL,
      pass: EMAIL_PASSWORD,
    },
  });

  const mailOptions = {
    from: "mix2pizza@outlook.com",
    to: userEmail,
    subject: "Item bought",
    text: "",
  };

  // Función para enviar correos electrónicos

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
    } else {
      console.log(`Correo enviado: ${info.response}`);
    }
  });
};

module.exports = sendBuyMail;
