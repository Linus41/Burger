var connection = require("./connection.js");

// methods that will execute MySql commands in the burger.js
var orm = {
    selectAll: function (table) {
        var queryString = "SELECT * FROM ??";
        connection.query(queryString, [table], function (err, result) {
            if (err) {
                throw err;
            }
            return(result);
        });
    },
    // create
    insertOne: function(table, cols, vals) {
        var queryString = "INSERT INTO ?? (??) VALUES (?)";
        connection.query(queryString, [table, cols, vals], function(err, result) {
          if (err) {
            throw err;
          }
          console.log(result);
        });
    },
    updateOne: function(table, cols, vals, id, idNumber) {
        var queryString = "UPDATE ?? SET (??) = ? WHERE ? = ?";
        connection.query(queryString, [table, cols, vals, id, idNumber], function(err, result) {
          if (err) {
            throw err;
          }
          console.log(result);
        });
      },
};


module.exports = orm;

