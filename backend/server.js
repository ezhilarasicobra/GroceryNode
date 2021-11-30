const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

// Config
require('dotenv').config();

// initialize express
const app = express();

// port
const port = process.env.PORT || 5000;


//connect db

const connectDb=require('./db')
connectDb()




// routes
const userRoutes = require('./routes/users');
const exerciseRoutes = require('./routes/exercises');

app.use(express.json({limit:"30mb",extended:true}))
app.use(express.urlencoded({limit:"30mb",extended:true}))
app.use(cors())

app.use('/exercises',exerciseRoutes);
app.use('/users', userRoutes);

app.listen(port, (req, res) => {
    console.log(`listening on http://localhost:${port}`);
});