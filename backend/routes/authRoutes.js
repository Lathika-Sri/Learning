const express=require('express')
const router=express.Router()

const {register,login} = require('../controllers/authControllers')

router.post('/register',register) //->end point
router.post('/login',login)

module.exports=router