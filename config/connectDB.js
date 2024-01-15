const mongoose = require('mongoose')
const colors = require('colors')

const connectDB = async () => {
    try {
        mongoose.connect(process.env.MONGO_URI, {
            dbName: "expense-tracker",
        }).then(connect => console.log("DataBase Connected")).catch(e => console.log(e));
    } catch (error) {
        console.log(`${error}`.bgRed)
    }
}

module.exports = connectDB