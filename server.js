var express = require('express');
//var logger = require('logger');

var app = express();


//app.use(logger);

app.get('/', function(req,res, next){
    res.write("Hey there!");
    next();
});

var server = app.listen(3000);
