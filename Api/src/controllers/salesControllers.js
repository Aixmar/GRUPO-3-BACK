const { Sale } = require("../db")

const newSaleController = async (total, products,userName) => {
    const newSale = await Sale.create({total: total, products: products , userName : userName})
    return newSale
}


const allSalesController = async ()=>{
    const allSales = await Sale.findAll();
    return allSales;
}

module.exports = {newSaleController, allSalesController}

