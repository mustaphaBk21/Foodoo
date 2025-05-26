require('dotenv').config();
const {Sequelize , DataTypes} = require('sequelize')

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host : process.env.DB_HOST ,
    dialect : "mysql"
})



const db = {}
db.sequelize=sequelize
db.restaurant = require('../models/index') (sequelize , DataTypes)

sequelize.authenticate()
.then(()=>{
     console.log("✅ Connected to database successfully")
})
.catch((error)=>{
    console.log("❌ Unable to connect to the database:" , error)
})



// sequelize.sync({force : true})
// .then(()=>{
//   console.log("  the table for the products model was just created !")
// })
// .catch((error)=>{
//     console.log(error)
// })




module.exports = db 