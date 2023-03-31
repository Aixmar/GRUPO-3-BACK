const { newSaleController,getAllSales } = require("../controllers/salesControllers")


const postNewSale = async (req, res)=>{
    try{
    const { total, products, userName } = req.body
    const results = await newSaleController(total, products,userName)
    res.status(200).json(results)
    } catch (error){
        console.log(error.message)
        res.status(400).json({ error:error.message })
    }
}

const getSales = async(req,res) =>{
    try {
        const allSales = await getAllSales();
        res.status(200).json(allSales);
      } catch (error) {
        res.status(400).json({ error: error.message });
      }
    };


module.exports = {postNewSale ,getSales}