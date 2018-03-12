// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
    letMeKnow: function(){
        console.log("I am a method in the burger object from burger.js");
    },
    selectAll: function(cb) {
        orm.all("burgers", cb);
    },
    // The variables cols and vals are arrays.
    insertOne: function(burgerName, devouredVal, cb) {
        orm.create("burgers", burgerName, devouredVal, cb );
    },
    updateOne: function(condition, cb) {
        orm.updateOne("burgers", condition, cb);
    },
    delete: function(condition, cb) {
        orm.delete("burgers", condition, function(res) {
        cb(res);
        });
    }
};

// Export the database functions for the controller (catsController.js).
module.exports = burger;
