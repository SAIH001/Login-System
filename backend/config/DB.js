const mongoose = require("mongoose");

async function ConnectDB() {
    try {

        const conn = await mongoose.connect(process.env.DB_URL)
        console.log(`MONGO DB ATLAS IS CONNECTED !!`)
    } catch (error) {
        console.log(error)
    }
}

module.exports = ConnectDB;