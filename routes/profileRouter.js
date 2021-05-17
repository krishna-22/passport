const express = require('express')
const profileRouter = express.Router()
const passport=require('passport')

const isauthenticated=(req)=>{
    if(req.user)
    return true
    else
    return false
}

profileRouter.route('/')
.get((req,res)=>{
    if(isauthenticated(req))
    res.send('welocome to your profile saikiran')
    else
    res.send('you need to be authenticated first')
   })
 
  


module.exports=profileRouter