var path = require("path");
var config = require("config");
var express = require("express");
var router = express.Router();

config.dir.root = __dirname;

var Application = require(path.join(
    config.dir.root,
    config.dir.app,
    config.file.app
));

var app = new Application(config, router);
var eApp = express();

app.initControllers();

eApp.use(config.httpServer.routeRoot, app.router);

eApp.use(function(req, res){
    res.sendStatus(404);
});

var server = eApp.listen(config.httpServer.port, function(){
    console.log(config.httpServer.alias + " is listening on port " + server.address().port);
});


