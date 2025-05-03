const app = require('./app');
const connectDb = require('./config/dataBase');

const startServer = async () =>{
    try {
        connectDb();
        app.listen(port,()=>{
            console.log("Server started");
        })
    } catch (error) {
        console.error(error);
    }
}

startServer();