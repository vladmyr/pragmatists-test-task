var path = require("path");
var _ = require("underscore");
var Promise = require("bluebird");

/**
 * Application object build function
 * @param   {Object}            config
 * @param   {express.Router}    router
 * @return  {Application}
 * @constructor
 */
var Application = function(config, router){
    _.extend(this, {
        router: router,
        config: config
    });
};

Application.prototype.initControllers = function(){
    var self = this;

    require(path.join(
        this.config.dir.root,
        this.config.dir.controllers,
        this.config.file.controllers[0]
    ))(self);
};

module.exports = Application;