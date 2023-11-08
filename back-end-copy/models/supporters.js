const mongoose = require('mongoose')


const supporter_schema = new mongoose.Schema({
    name: {
        type: String,
    },
    hometown:{
        type: String,
    },  
    email: {
        type: String,
    },
    time: {
        type: String,
    }

    
})


const User = mongoose.model('user', supporter_schema)
module.exports = User