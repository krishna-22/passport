const express = require('express')
const passport = require('passport')
const registerRouter = express.Router()
const mongoose = require('../index')
const users= require('../models/userModel')
registerRouter.route('/')
.get((req,res)=>{res.send('get is not allowed on register endpoint')})
.post((req,res)=>{
  const rec= new users({email:req.body.username,password:req.body.password})
  rec.save()
  .then((data)=>{res.send(data)})
  .catch((err)=>{console.log(err)})
})
.put((req,res)=>{res.send('put is not allowed on register endpoint')})
.delete((req,res)=>{res.send('delete is not allowed on register endpoint')})


module.exports=registerRouter