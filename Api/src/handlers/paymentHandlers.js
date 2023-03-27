const mercadopago = require("mercadopago");
mercadopago.configurations.setAccessToken("TEST-4003612588175736-032118-8f90a1dce97c31f4a792070beb7eea3a-1335802344");

const postPaymentHandler = async (req, res, next) => {

  console.log('Solicitud de pago recibida:', req.body);

  // Crea el pago con MercadoPago
  mercadopago.payment.save(req.body)
  // .then(payment => {
  //   console.log('Pago exitoso:', payment);
  //   res.send('Pago procesado exitosamente');
  // })
  .then((response) => {
    // console.log('ACAAAAAAAa', response);
    const { status, status_detail, id } = response.body;
    console.log('ACAAAAAAAa', id);
    res.status(response.status).json({ status, status_detail, id });
  })
  .catch(error => {
    console.error('Error al procesar el pago:', error);
    res.status(500).json('Error al procesar el pago');
  });
};

module.exports = {
  postPaymentHandler,
};
