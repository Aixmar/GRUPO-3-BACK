const sendRegisterMail = require("../nodemailer/sendRegisterEmails");
const sendBuyMail = require("../nodemailer/sendBuyEmails");

const postRegisterEmail = (req, res) => {
  try {
    const { email } = req.body;
    sendRegisterMail(email);

    res.status(200).send("Mail enviado exitosamente");
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const postBuyEmail = (req, res) => {
  try {
    const { email, items, name } = req.body;
    sendBuyMail(email, items, name);

    res.status(200).send("Mail enviado exitosamente");
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { postRegisterEmail, postBuyEmail };
