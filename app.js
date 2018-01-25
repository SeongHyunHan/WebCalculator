//import built-in modules
const http = require('http');
const path = require('path');

//import external modules
const express = require('express');
const static = require('serve-static');
const bodyParser = require('body-parser');

//import custom modules
const Calc = require('./modules/Calc');
const Log = require('./modules/Log');
const router = require('./router/router');

//create express instance object
const app = new express();

//set a port
app.set('port', process.env.PORT || 3000); //set PORT that is defined in Environment Path, If it is not defined set port 3000

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

// Register router to Middleware
app.use('/', router);
