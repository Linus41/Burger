// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
  selectAll: function(cb) {
    orm.selectAll("burgers", function(res) {
      cb(res);
    });
  },
  
  insertOne: function(cols, vals, cb) {
    orm.insertOne("burgers", cols, vals, function(res) {
      cb(res);
    });
  },
  
  updateOne: function (column, value, condition, cb) {
    orm.updateOne("burgers", column, value, condition, function(res) {
      // this is the model that talks to the DB so could this be where db gets devour update? or is that the controller?
    });
  }
};

// Export the database functions for the controller (burgers_controller.js).
module.exports = burger;
