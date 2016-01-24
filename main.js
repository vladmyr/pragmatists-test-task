var path = require("path");
var config = require("config");
var express = require("express");
var bodyParser = require('body-parser');

var router = express.Router();

config.dir.root = __dirname;

var Application = require(path.join(
    config.dir.root,
    config.dir.app,
    config.file.app
));

var app = new Application(config, router);
var eApp = express();

eApp.use(bodyParser.json());
eApp.use(bodyParser.urlencoded({ extended: true }));
eApp.use(express.static(path.join(
    config.dir.root,
    config.dir.public
)));
app.initControllers();
eApp.use(config.httpServer.routeRoot, app.router);

// 404
eApp.use(function(req, res){
    return res.status(404).end();
});

var server = eApp.listen(config.httpServer.port, function(){
    console.log(config.httpServer.alias + " is listening on port " + server.address().port);
});


