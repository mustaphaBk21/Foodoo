const express = require('express')
const app = express()
const port  =5000 
const db = require('./config/db')
const cors = require('cors')
const restauroutes = require('./routes/route')



app.use(cors())
app.use(express.json())
app.use('/restaus' , restauroutes)



app.listen(port , ()=>{
    console.log(`server is running on port : ${port}`)
})
