const { newSaleController, allSalesController } = require("../controllers/salesControllers")


const postNewSale = async (req, res)=>{
    try{
    const { total, products } = req.body
    const results = await newSaleController(total, products)
    res.status(200).json(results)
    } catch (error){
        console.log(error.message)
        res.status(400).json({ error:error.message })
    }
}

const getAllSales = async (req,res) => {
    try {
        const allSales = await allSalesController()
        res.status(200).json(allSales)
    } catch (error) {
        res.status(400).json( {error:error.message} )
    }
}

module.exports = {postNewSale, getAllSales}