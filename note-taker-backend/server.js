const app = require('./app');
const connectDb = require('./config/dataBase');
require('dotenv').config();

const startServer = async () =>{
    try {
        connectDb();
        app.listen(process.env.PORT,()=>{
            console.log("Server started");
        })
    } catch (error) {
        console.error(error);
    }
}

startServer();