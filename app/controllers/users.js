var uuid = require("uuid").v4;
var _ = require("underscore");

// database data imitation
var users = [{
    id: uuid(),
    name: "user001",
    email: "user001@example.com"
}, {
    id: uuid(),
    name: "user002",
    email: "user002@example.com"
}, {
    id: uuid(),
    name: "user003",
    email: "user003@example.com"
}, {
    id: uuid(),
    name: "user004",
    email: "user004@example.com"
}, {
    id: uuid(),
    name: "user005",
    email: "user005@example.com"
}, {
    id: uuid(),
    name: "user006",
    email: "user006@example.com"
}, {
    id: uuid(),
    name: "user007",
    email: "user007@example.com"
}];
var indexed = _.indexBy(users, "id");

/**
 * Controller. Users
 * @param {Application} app
 * @module
 */
var UsersController = (function(app){
    var getUserById = function(id){
        return indexed[id];
    };

    var upsertUser = function(user, attrs){
        user = user || {};
        attrs = attrs || {};

        if (user.id) {
            // update user
            user = _.extend(user, _.pick(attrs, ["name", "email"]));
        } else {
            // create user
            user = _.extend({
                id: uuid()
            }, _.pick(attrs, ["name", "email"]));

            users.push(user);                  // save user
            indexed = _.indexBy(users, "id");   // update user index
        }

        return user;
    };

    var delUser = function(user){
        users = _.without(users, user);
        indexed = _.indexBy(users, "id");
    };

    var paramId = function(req, res, next, id){
        var user = getUserById(id);

        if(user) {
            req.user = user;
            return next();
        } else {
            return res.status(404).end("There is no user with such id: " + id);
        }
    };

    var getAllUsers = function(req, res, next){
        return res.json(users);
    };

    var postUser = function(req, res, next){
        var user = upsertUser(req.user, req.body || {});

        if(user){
            return res.json(user);
        } else {
            return res.status(500).end();
        }
    };

    var putUser = function(req, res, next){
        var user = upsertUser(req.user, req.body || {});

        if(user){
            return res.json(user);
        } else {
            return res.status(500).end();
        }
    };

    var deleteUser = function(req, res, next){
        delUser(req.user);

        return res.status(204).send();
    };

    var router = app.router;

    router.param("id", paramId);
    router
        .route("/users/:id")
        .put(putUser)
        .delete(deleteUser);
    router
        .route("/users")
        .get(getAllUsers)
        .post(postUser);
});

module.exports = UsersController;