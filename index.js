const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const app = express();

const cors = require('cors');
const bodyparser = require('body-parser');
const cookieParser = require('cookie-parser');

const port = process.env.PORT;
if (!port) {
    console.log("Application unable to access any port!!");
    process.exit(1);
}

// middlewares
app.use(cors());
app.use(express.json());
app.use(bodyparser.json());
app.use(cookieParser());

// imports
const userRoutes = require('./routes/user.Route.js');
const taskRouter = require('./routes/task.Route.js');
const { connectDB } = require('./config/db.js');


// routes
app.use('/api/v1', userRoutes);
app.use('/api/v1', taskRouter);

const initApp = async () => {
    try {        
        await connectDB();
        app.listen(3001, () => {
            console.log('app running successfully...');
            console.log(`http://localhost:${port}/api/v1`)
        });
    } catch (error) {
        console.log("error occured while initializing the app...", error);
    }
}
initApp();