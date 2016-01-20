var UsersController = function(app){
    var router = app.router;

    router.param("id", this.paramId);
    router
        .route("/users")
        .get(this.getAllUsers)
        .post(this.postUser);
    router
        .route("/users/:id")
        .get(this.getUser)
        .put(this.putUser)
        .delete(this.deleteUser);
};

UsersController.prototype.paramId = function(req, res, next, id){
    console.log("paramId");
    return next();
};

UsersController.prototype.getAllUsers = function(req, res, next){
    res.json({
        message: "getAllUsers"
    });
};

UsersController.prototype.getUser = function(req, res, next){
    res.json({
        message: "getUser"
    });
};

UsersController.prototype.postUser = function(req, res, next){
    res.json({
        message: "postUser"
    });
};

UsersController.prototype.putUser = function(req, res, next){
    res.json({
        message: "putUser"
    });
};

UsersController.prototype.deleteUser = function(req, res, next){
    res.json({
        message: "deleteUser"
    });
};

module.exports = UsersController;