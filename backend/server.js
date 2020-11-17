const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path')
var port = process.env.PORT || 3000;
const db = require('../backend/database');
var app = express();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(cors());
app.use(express.static('frontend'))
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'../frontend/index.html'))
})
app.get('/Home',db.getAll)
app.listen(port,()=>{
console.log("Server is running at http://localhost:"+port)
})

