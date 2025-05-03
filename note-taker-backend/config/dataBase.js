const mongoose = require('mongoose');
require('dotenv').config();

const connectDb = async ()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("database connected successfully");
    } catch (error) {
        console.error('database Connection Failed',error);
        process.exit(1);
    }
};

module.exports = connectDb;