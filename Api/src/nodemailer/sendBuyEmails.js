const nodemailer = require("nodemailer");
require("dotenv").config();

const { EMAIL, EMAIL_PASSWORD } = process.env;

const sendBuyMail = (userEmail, items, name) => {
  // Configurar el transportador SMTP para enviar correos electrónicos
  const transporter = nodemailer.createTransport({
    service: "gmail",
    port: 587,
    secure: false,
    auth: {
      user: EMAIL,
      pass: EMAIL_PASSWORD,
    },
  });

  const mailOptions = {
    from: "mix2pizza@gmail.com",
    to: userEmail,
    subject: "Item bought",
    html: `
    <html>
    <head>
        <meta charset="UTF-8">
        <title>Confirmación de compra en Mix2Pizza</title>
        <style type="text/css">
            body {
                font-family: Arial, sans-serif;
                font-size: 16px;
                line-height: 1.5;
                color: #333;
            }
            h1, h2, h3 {
                font-weight: normal;
                margin: 0;
                padding: 0;
                line-height: 1.2;
            }
            h1 {
                font-size: 28px;
                margin-bottom: 10px;
            }
            h2 {
                font-size: 24px;
                margin-bottom: 5px;
            }
            p {
                margin-top: 0;
                margin-bottom: 10px;
            }
            .table {
                border-collapse: collapse;
                width: 100%;
                margin-bottom: 20px;
            }
            .table th, .table td {
                padding: 10px;
                text-align: left;
                vertical-align: top;
                border-bottom: 1px solid #ccc;
            }
            .table th {
                background-color: #f5f5f5;
                font-weight: bold;
            }
            .table td:last-child {
                text-align: right;
            }
            .total {
                margin-top: 30px;
                text-align: right;
            }
            .total strong {
                font-size: 20px;
            }
        </style>
    </head>
    <body>
        <h1>Confirmación de compra en Mix2Pizza</h1>
        <p>Estimado/a ${name},</p>
        <p>Gracias por su compra en Mix2Pizza. Hemos recibido su orden y estamos procesando su pedido. A continuación encontrará los detalles de su compra:</p>
        <table class="table">
            <thead>
            ${items.map(
              (item) => `
              <tr>
                <th>${item.name}</th>
                <th>Cantidad: ${item.quantity}</th>
                <th>Precio unitario: $${item.price}</th>
                <th>Total: $${item.price * item.quantity}</th>
              </tr>
            `
            )}

            </thead>

        </table>
        <div class="total">
            <strong>Total a pagar: ${items
              .map((item) => item.price * item.quantity)
              .reduce((acc, curr) => acc + curr)}</strong>
        </div>
        <p>Gracias por elegir Mix2Pizza.</p>
    </body>
    </html>
    `,
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
