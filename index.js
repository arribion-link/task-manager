const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const app = express();


// routes
const taskRoutes = require('./routes/task.Route.js');

app.get('/', (req, res) => {
    res.send('heollo')
})

app.use('/api/v1', taskRoutes);

app.listen(3001, () => {
    console.log('running')
})