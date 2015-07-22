﻿var http = require('http');
var port = process.env.port || 1337;

var express = require('express');
var app = express();

// Setup the View Engine
app.set("view engine", "jade");

app.get("/", function (req, res) {
    res.send("<html><body><h1>Express</h1></body></html>");
});

http.createServer(app).listen(port);