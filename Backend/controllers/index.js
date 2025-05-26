const db = require('../config/db')
const Restaurant = db.restaurant

module.exports = {
    getAllresatu : (req, res)=>{
        Restaurant.findAll()
        .then((restau)=>{
            res.json(restau)
        })
        .catch((error)=>{
            res.status(500).json(error)
        })
    }
}