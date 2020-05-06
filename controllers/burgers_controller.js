var express = require("express")
var burger = require("../models/burger.js");

var router = express.Router();



// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  // refers to burger.js var burger, then method name
    burger.selectAll(function(data) {
      var hbsObject = {
        burger: data
      };
      console.log(hbsObject);
      res.render("index", hbsObject);
    });
  });
  
  router.post("/api/burger", function(req, res) {
    burger.insertOne([
      "burger_name", "devoured"
    ], [
      req.body.burger_name, req.body.devoured
    ], function(result) {
      console.log("result.insertId", result.insertId)
      res.json({ id: result.insertId });
    });
  });
  
  router.put("/api/burger/:id", function(req, res) {
    var condition = "id = " + req.params.id;
  
    console.log("condition", condition);
  
    burger.updateOne({
      devoured: req.body.devoured
    }, condition, function(result) {
      if (result.changedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });
  






module.exports = router;
