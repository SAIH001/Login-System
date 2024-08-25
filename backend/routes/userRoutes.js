const express = require("express");

const router = express.Router();

const multer = require("multer");

const path = require("path");

const {createUser} = require("../controllers/userController");

const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,path.join(__dirname,'../uploads/userImages'))
    },
    filename:(req,file,cb)=>{
        cb(null,Date.now()+path.extname(file.originalname))
    }
})

const uploads = multer({storage});

router.route('/registration/').post(uploads.single("userImage"), createUser);


module.exports = router;