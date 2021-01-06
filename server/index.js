
// its controlar class
const path = require('path');
var express = require('express');
var app =express();
var bodyparser = require('body-parser');
var cors = require('cors');
app.use(cors());
app.use(bodyparser.json());
var orderData = require('./controllers/orders');
///////////////////// Upload image multer function implements here //////////////


const Port = 3000;
var conn=app.listen(Port,function(){
    console.log('server is runing on port = '+Port)
    // console.log(window.location.pathname);
});

app.get('/api/getOrders',orderData.getOrders);
app.post('/api/getOneOrder',orderData.getOneOrder);
module.exports=app;
