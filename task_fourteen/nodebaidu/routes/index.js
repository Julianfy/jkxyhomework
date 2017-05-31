var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var dbconnection = require("./db");

/* 在主页获取新闻时的请求 */
router.get('/', function(req, res, next) {
 	var newstype = req.query.newstype;
 	var connection = mysql.createConnection(dbconnection);
 	connection.connect();
 	connection.query('SELECT * FROM `news` WHERE `newstype` = ?',[newstype],function(err,rows,fields){
 			console.log("24124");
 			res.json(rows);
 	});
});

module.exports = router;
