// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
    letMeKnow: function(){
        console.log("I am a method in the burger object from burger.js");
    },
    selectAll: function(cb) {
        orm.all("burgers", function(res) {
        cb(res);
        });
    },
    // The variables cols and vals are arrays.
    insertOne: function(cols, vals, cb) {
        orm.create("burgers", cols, vals, function(res) {
        cb(res);
        });
    },
    updateOne: function(objColVals, condition, cb) {
        orm.update("burgers", objColVals, condition, function(res) {
        cb(res);
        });
    },
    delete: function(condition, cb) {
        orm.delete("burgers", condition, function(res) {
        cb(res);
        });
    }
};

// Export the database functions for the controller (catsController.js).
module.exports = burger;
