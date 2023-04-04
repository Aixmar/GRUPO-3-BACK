const { Orders } = require("../db")

const newOrderController = async (products,userName) => {
    const newOrder = await Orders.create({products: products , userName : userName})
    return newOrder
}

const deleteOrderController = async (id) => {
    const order = await Orders.findOne({ where: { id: id } })
    if (!order) {
        return({ message: 'Sale not found' }); // si no se encuentra la venta, enviar un error 404
      }
    await order.destroy() 
    return; 
}
const allOrdersController = async ()=>{
    const allOrder = await Orders.findAll();
    return allOrder;
}

module.exports = {newOrderController, allOrdersController, deleteOrderController}

