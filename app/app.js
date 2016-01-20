var path = require("path");
var _ = require("underscore");
var Promise = require("bluebird");

var Application = function(config, router){
    _.extend(this, {
        router: router,
        config: config
    });
};

Application.prototype.initControllers = function(){
    var self = this;

    var UsersController = require(path.join(
        this.config.dir.root,
        this.config.dir.controllers,
        this.config.file.controllers[0]
    ));

    var usersController = new UsersController(self);
};

module.exports = Application;