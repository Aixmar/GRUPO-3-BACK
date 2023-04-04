const { newOrderController, allOrdersController, deleteOrderController } = require("../controllers/ordersControllers")

const postNewOrders = async (req, res)=>{
    try{
    const { products, userName } = req.body
    const results = await newOrderController( products,userName)
    res.status(200).json(results)
    } catch (error){
        console.log(error.message)
        res.status(400).json({ error:error.message })
    }
}

const deleteOrders = async (req, res)=>{
    try{
    const { id } = req.params
    console.log('---------------->',id);

    const results = await deleteOrderController(id)
        res.status(200).json(results)
    } catch (error){
        console.log(error.message)
        res.status(400).json({ error:error.message })
    }
}

const getAllOrders = async (req,res) => {
    try {
        const allOrders = await allOrdersController()
        res.status(200).json(allOrders)
    } catch (error) {
        res.status(400).json( {error:error.message} )
    }
}

module.exports = {postNewOrders, getAllOrders, deleteOrders}

