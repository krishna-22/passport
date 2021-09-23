
const Localstrategy= require('passport-local').Strategy
const users = require('./models/userModel')

const authenticateUser=(username,password,done)=>
{
    console.log('hi')
    users.findOne({email:username})
    .then((user)=>{
        if(user.password===password)
        {
            done(null,user)
        }
        else{
            done(null,false)
        }
    })
    .catch((err)=>done(err))
}

// when we login, authenticate() is called, which involkes above function. it passes user object to serialiser if credentials are correct. serialiser will set id feild of object 
// req.passport.session.id.(also passed as cookie with response) // & then deserialiser is invoked. deserialiser fetches user object based on id and attached it to req.user
// when logout is called, req.logout() is invoked which destroys req.passport.session.id, so cookie cant be passed with response from now

const initialise=(passport)=>{
    passport.use(new Localstrategy((authenticateUser)))
    passport.serializeUser((user,done)=>{
        console.log('serial')
      done(null,user.id)
    })
    passport.deserializeUser(function(id, done) {
        console.log('deserial1')
        users.findById(id, function(err, user) {
            
            console.log(user)
          done(err, user);
        });
      });
}
module.exports=initialise
