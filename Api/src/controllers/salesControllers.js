const { Sale } = require("../db")

const newSaleController = async (total, products,userName) => {
    const newSale = await Sale.create({total: total, products: products , userName : userName})
    return newSale
}

const getAllSales = async ()=>{
    return await Sale.findAll();
}

module.exports = {newSaleController ,getAllSales}