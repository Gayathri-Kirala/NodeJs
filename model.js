const mongoose=require('mongoose')

let users = mongoose.Schema({
    name:{
        type: String
    },
    redgno:{
        type:Number
    }
})

module.exports = mongoose.model("users",users)