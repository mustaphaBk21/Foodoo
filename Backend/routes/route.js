const express  =require('express')
const router = express.Router()

    const {getAllresatu} = require('../controllers/index')
router.get('/getAll' , getAllresatu)

module.exports = router