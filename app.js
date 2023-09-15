require('dotenv').config();
const express =require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 5000;

const cors = require('cors');
app.use(cors());

app.use(express.urlencoded({extended : true}));
app.use(express.json());

//dbconection
const db = require('./config/database');

//route
app.use('/api',require('./routes/indexRoute'));

app.listen(port , (e)=>{
    if(e){
        console.log('page not found');
    }
    console.log('page is running on prot',port);
})