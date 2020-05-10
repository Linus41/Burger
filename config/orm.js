var connection = require("./connection.js");

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
    
    insertOne: function(table, cols, vals, cb) {
        var queryString = "INSERT INTO ?? (??) VALUES (?)";
        connection.query(queryString, [table, cols, vals], function(err, result) {
          if (err) {
            throw err;
          }
          cb(result);
        });
    },
    
    updateOne: function(table, cols, vals, condition, cb) {
        var queryString = "UPDATE ?? SET ?? = ? WHERE " + condition;
          connection.query(queryString, [table, cols, vals, condition], function(err, result) {
          if (err) {
            throw err;
          }
          cb(result);
        });
      },
};


module.exports = orm;

