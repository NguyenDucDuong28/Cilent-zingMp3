var express = require('express');
var router = express.Router();
var db = require('../models/databaes');

router.get('/bxh',function(req ,res, next){
    let sql = `SELECT * FROM  song`;
    db.query(sql, function(err, data) {
        res.render("bxh",{ list: data });
    });
}); 


module.exports = router;