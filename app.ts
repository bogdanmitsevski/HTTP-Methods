require('dotenv').config();
import express from 'express';
const app = express();
const port = process.env.PORT || 4005;
import router from './routes/testRouter';
app.use(express.json());


const start = async () => {
    try {
        app.use('/api', router);
        app.listen(port, ()=>{
            console.log(`Server is working on ${port} PORT`);
        })
    }
    catch(e) {
        console.log(e);
    }
};

start();

