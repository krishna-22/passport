
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