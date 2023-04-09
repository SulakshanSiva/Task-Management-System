// import express, create web server
const express = require('express');
const cors = require('cors');

const app = express();
//declare PORT
const PORT = process.env.PORT || 4000;

app.use(express.json())
app.use(cors());


app.post("/Register", (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    const valid = req.body.valid;

    console.log(email, valid, password);
})


// display message on server start
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));