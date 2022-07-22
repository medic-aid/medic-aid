const express = require('express');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 5000
const routes = require('./Routes/appRoutes')
const cors = require('cors')
const mongoose = require('mongoose');

app.use(cors());
app.use(express.urlencoded({extended:true}))
app.use(express.json());
app.use('/api', routes)

// Connect
const dbURI = process.env.MONGOS_URI;
mongoose.connect(dbURI, (err)=>{
    { !err ? console.log('DB Connected Successfully') : console.log(err) };
})

app.listen(PORT)