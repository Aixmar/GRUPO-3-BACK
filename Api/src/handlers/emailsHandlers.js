const sendRegisterMail = require("../nodemailer/sendRegisterEmails");

const postRegisterEmail = (req, res) => {
  try {
    const [email] = req.body;
    sendRegisterMail(email);
    res.status(200).send("Mail enviado exitosamente");
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { postRegisterEmail };
