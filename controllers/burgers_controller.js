var express = require("express")
var burger = require("../models/burger.js");

var router = express.Router();


router.get("/", function (req, res) {
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
    res.json({ id: result.insertId });
  });
});

router.put("/api/burger/:id", function (req, res) {
  var condition = "id = " + req.params.id;
  burger.updateOne("devoured", req.body.devoured, condition, function (result) {
    if(devoured = 1) {
      result = $(".devoured").text(req.body.burger_name);
    } 
  
  });
});



module.exports = router;
