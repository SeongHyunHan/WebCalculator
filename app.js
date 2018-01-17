//import built-in modules
const http = require('http');
const path = require('path');

//import modules from npm
const express = require('express');
const static = require('serve-static');
const bodyParser = require('body-parser');

//import custom modules
const Calc = require('./modules/Calc');
const Log = require('./modules/Log');

//create express instance object
const app = new express();

//set a port
app.set('port', process.env.PORT || 8080); //set PORT that is defined in Environment Path, If it is not defined set port 8080

//create server
const server = http.createServer(app).listen(app.get('port'), () =>{
    //Callback when webserver executed
    console.log('Express Web Server Executed : ' + app.get('port'));
});

// Middleware
app.use((static(path.join(__dirname, 'public'))));

// Middleware for parsing body that used post method
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// Middleware parse message and send to page according to value stored in button
app.use((req, res, next) => {
    var paramValue = req.body.page || req.query.page // Post Method || Get Method
    switch(paramValue){
        case 'BMI Calculator':
            res.redirect('bmi.html');
            break;
        case 'Unit Convertor':
            res.redirect('unit.html');
            break;
        case 'Simple Calculator':
            res.redirect('simple.html');
            break;
    }
});
