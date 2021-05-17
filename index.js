//jshint esversion:6
const express= require('express')
const bodyParser= require('body-parser')
const session=require('express-session')
const app = express()
const mongoose=require('mongoose')
app.listen(3000,()=>{'Listening,sai'})

app.use(bodyParser.json());
mongoose.connect('mongodb://localhost:27017/new',{ useNewUrlParser: true, useUnifiedTopology: true })
.catch((err)=>{console.log(err)})
module.exports=mongoose
const passport=require('passport')
const initialise=require('./passportSetup') 
initialise(passport)



app.use(session({
    secret:'unny',
    cookie: { 
        maxAge:1000*60*60*60
    },
    resave:false,
    saveUninitialized:false
}))
app.use(passport.initialize())

app.use(passport.session())


const loginRouter=require('./routes/loginRouter')
const registerRouter=require('./routes/registerRouter')
const logoutRouter = require('./routes/logoutRouter')
const homeRouter=require('./routes/homeRouter')
const profileRouter=require('./routes/profileRouter')

app.use('/',homeRouter)
app.use('/login',loginRouter)
app.use('/register',registerRouter)
app.use('/logout',logoutRouter)
app.use('/profile',profileRouter)

app.use((req,res)=>{
res.statusCode=404;
res.send('file not found')
})




