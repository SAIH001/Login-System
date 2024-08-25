const mongoose = require("mongoose");

const userAccount = require('../models/userAccount')

async function createUser(req,res){

    if(!req.file){
        return res.status(401).json({error:"Please Select a Profile Picture"})
    }
    if(!req.body.userName){
        return res.status(401).json({error:"Please Enter a valid Name"})
    }
    if(!req.body.userEmail){
        return res.status(401).json({error:"Please Enter a valid Email"})
    }
    if(!req.body.userPassword){
        return res.status(401).json({error:"Please Enter a valid Password"})
    }




    const newUser = await userAccount.create({
        userName:req.body.userName,
        userEmail:req.body.userEmail,
        userPassword:req.body.userPassword,
        userImage:req.file.filename
    })

    return res.status(201).json({success:"Account Created Successfully !!"})
}



module.exports = {createUser};