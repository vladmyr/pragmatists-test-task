// users placeholder
var users = {
    0: {
        id: "0",
        name: "user001",
        email: "user001@example.com"
    },
    1: {
        id: "1",
        name: "user002",
        email: "user002@example.com"
    },
    2: {
        id: "2",
        name: "user003",
        email: "user003@example.com"
    },
    3: {
        id: "3",
        name: "user004",
        email: "user004@example.com"
    },
    4: {
        id: "4",
        name: "user005",
        email: "user005@example.com"
    },
    5: {
        id: "5",
        name: "user006",
        email: "user006@example.com"
    },
    6: {
        id: "6",
        name: "user007",
        email: "user007@example.com"
    }
};

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
    if(users[id]) {
        req.user = users[id];
        return next();
    } else {
        return res.status(404).end("There is no user with such id: " + id);
    }
};

UsersController.prototype.getAllUsers = function(req, res, next){
    return res.json(users);
};

UsersController.prototype.getUser = function(req, res, next){
    return res.json(req.user);
};

UsersController.prototype.postUser = function(req, res, next){
    return res.json({
        message: "postUser"
    });
};

UsersController.prototype.putUser = function(req, res, next){
    return res.json({
        message: "putUser"
    });
};

UsersController.prototype.deleteUser = function(req, res, next){
    res.json({
        message: "deleteUser"
    });
};

module.exports = UsersController;