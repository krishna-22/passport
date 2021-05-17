const express = require('express')
const logoutRouter = express.Router()

logoutRouter.route('/')
.get((req,res)=>{req.logout();res.redirect('/')})

module.exports=logoutRouter