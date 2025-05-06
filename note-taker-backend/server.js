const app = require('./app');
const connectDb = require('./config/dataBase');
require('dotenv').config();

const startServer = async () =>{
    try {
        connectDb();
        app.listen(process.env.PORT,()=>{
            console.log(`Server running on 192.168.59.218:3000`);
        })
    } catch (error) {
        console.error(error);
    }
}

startServer();