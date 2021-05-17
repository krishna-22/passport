const mongoose = require('../index')

const userSchema = {
    email:String,
    password: String
}

module.exports = mongoose.model('user',userSchema)

