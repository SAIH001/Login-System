const mongoose =require('mongoose');

const userAccount_Model=mongoose.Schema({
    userName:{
        type:String,
        required:[true,"please enter you name"]
    },
    userEmail:{
        type:String,
        required:[true,"please enter you email"]
    },
    userPassword:{
        type:String,
        required:[true,"please enter you password"]
    },
    userImage:{
        type:String,
        required:[true,"please add your image"]
    },
})

module.exports =mongoose.model("userAccount",userAccount_Model);