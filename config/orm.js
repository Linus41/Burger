var connection = require("./connection.js");

// methods that will execute MySql commands in the burger.js
var orm = {
    selectAll: function (table, cb) {
        var queryString = "SELECT * FROM ??";
        connection.query(queryString, [table], function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);

        });
    },
    // create
    insertOne: function(table, cols, vals, cb) {
        var queryString = "INSERT INTO ?? (??) VALUES (?)";
        connection.query(queryString, [table, cols, vals], function(err, result) {
          if (err) {
            throw err;
          }
          cb(result);
        });
    },
    // this isn't actually changing 0 to 1 in the devoured column
    updateOne: function(table, cols, vals, cb) {
        var queryString = "UPDATE ?? SET "+ cols +"=true WHERE " + condition;
          var query = connection.query(queryString, [table, vals], function(err, result) {
          if (err) {
            throw err;
          }
          cb(result);
          console.log(query);
        });
      },
};


module.exports = orm;

