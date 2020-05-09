var express = require("express")
var burger = require("../models/burger.js");

var router = express.Router();



// Create all our routes and set up logic within those routes where required.
router.get("/", function (req, res) {
  // refers to burger.js var burger, then method name
  burger.selectAll(function (data) {
    var hbsObject = {
      burger: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/burger", function (req, res) {
  burger.insertOne([
    "burger_name", "devoured"
  ], [
    req.body.burger_name, req.body.devoured
  ], function (result) {
    console.log("result.insertId", result.insertId)
    res.json({ id: result.insertId });
  });
});

router.put("/api/burger/:id", function (req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition, req.body.devoured);

  burger.updateOne({
    devoured: req.body.devoured
  }, condition, function (result) {
    if(devoured = 1) {
      result = $(".devoured").text(req.body.burger_name);
       
    
    } 
  
  });
});







module.exports = router;
