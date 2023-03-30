const { Sale } = require("../db")

const newSaleController = async (total, products) => {
    const newSale = await Sale.create({total: total, products: products})
    return newSale
}

module.exports = {newSaleController}