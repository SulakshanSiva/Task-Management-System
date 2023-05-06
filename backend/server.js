// import express, create web server
const express = require('express');
const cors = require('cors');
const app = express();
//declare PORT
const PORT = process.env.PORT || 4000;

const userAuthRoutes = require('./Routes/userAuthRoutes');

app.use(express.json())
app.use(cors());

app.use('/auth', userAuthRoutes);

// display message on server start
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));