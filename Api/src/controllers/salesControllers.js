const { Sale } = require("../db")

const newSaleController = async (total, products) => {
    const newSale = await Sale.create({total: total, products: products})
    return newSale
}

const allSalesController = async ()=>{
    const allSales = await Sale.findAll();
    return allSales;
}

module.exports = {newSaleController, allSalesController}