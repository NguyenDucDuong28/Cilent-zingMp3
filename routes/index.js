var express = require('express');
var router = express.Router();

var db = require('../models/databaes');



router.get('/',function(req ,res, next){
    let sql = `SELECT * FROM  song `;
    db.query(sql, function(err, data) {
        res.render("song",{ list: data })
    });
});



module.exports = router;