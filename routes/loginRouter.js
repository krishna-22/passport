const express = require('express')
const loginRouter = express.Router()
const passport=require('passport')
const mongoose = require('../index')
const user= require('../models/userModel')
loginRouter.route('/')
.post(passport.authenticate('local'),(req,res)=>{
  res.send('you are logged in')
   })
 
  


module.exports=loginRouter