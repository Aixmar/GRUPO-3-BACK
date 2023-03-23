const nodemailer = require("nodemailer");
// const fs = require("fs");
// const message = fs.readFileSync("registered", "utf-8");
require("dotenv").config();

const { EMAIL, EMAIL_PASSWORD } = process.env;

const sendRegisterMail = (userEmail) => {
  // Configurar el transportador SMTP para enviar correos electrónicos
  const transporter = nodemailer.createTransport({
    //service: "gmail",
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
    subject: "Registered",
    html: `
    <html>
      <head>
        <title>Bienvenido a Mix2Pizza</title>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <style>
          body {
            font-family: Arial, sans-serif;
            background-color: #f2f2f2;
            color: #333;
            margin: 0;
            padding: 0;
          }
    
          h1 {
            font-size: 36px;
            font-weight: bold;
            margin: 0 0 20px 0;
            padding: 0;
            text-align: center;
          }
    
          p {
            font-size: 18px;
            margin: 0 0 10px 0;
            padding: 0;
            text-align: justify;
          }
    
          .container {
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            background-color: #fff;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
          }
    
          .logo {
            display: block;
            margin: 0 auto;
            padding: 20px;
            text-align: center;
            width: 400px;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <img
            class="logo"
            src="https://res.cloudinary.com/dozwiqjh1/image/upload/v1679439410/landnav/logo-pizza-app_jvxly9_xlhkkl.png"
            alt="Logo de Mi Aplicación"
          />
          <h1>Welcome to Mix2Pizza</h1>
          <p>
          "Thank you for registering with our application! We are pleased to have
          you as a member of our community. We hope you enjoy all the pizzas we
          offer and are encouraged to create your own."
          </p>
          <p>
          "If you have any questions or need help, do not hesitate to contact us. We are here to assist you!"
          </p>
          <p>Hope to hear from you soon</p>
          <p>Mix2Pizza's team</p>
        </div>
      </body>
    </html>`,
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

module.exports = sendRegisterMail;
