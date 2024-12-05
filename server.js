const app = require('./src/app')
const connectDB = require('./src/config/db');
const { PORT } = require('./src/constants');
connectDB();

app.listen(PORT,()=>{
    console.log(`++ SERVER RUNNING ON ${PORT}`);
})