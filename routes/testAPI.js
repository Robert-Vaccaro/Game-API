var express = require("express");
var router = express.Router();

router.get("/", function(req, res, next) {
    const csvFilePath='data_assignment.csv'
    const csv=require('csvtojson')
    csv()
    .fromFile(csvFilePath)
    .then((jsonObj)=>{
        res.send(jsonObj);
    })
});

module.exports = router;