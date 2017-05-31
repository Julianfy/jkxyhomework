var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var orm = require('orm');
var dbconnection = require("./db");
var csrf = require('csurf');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var moment = require('moment-timezone');
var xss = require('xss');
/*admin  */


// setup route middlewares 
var csrfProtection = csrf({ cookie: true });
var parseForm = bodyParser.urlencoded({ extended: false });

// parse cookies 
// we need this because "cookie" is true in csrfProtection 
var app = express();
app.use(cookieParser());

router.get('/backstage',csrfProtection, function(req, res, next) {
  res.json({ csrfToken: req.csrfToken() });
});

var connection = mysql.createPool(dbconnection);
router.get('/getnews', function(req, res, next) {
    connection.query('SELECT * FROM `news` order by id desc limit 10', function(err,rows) {
        for(var i=0;i<rows.length;i++){
            rows[i]['newstitle']=xss(rows[i]['newstitle']);
            rows[i]['newstime']=moment.tz(rows[i]['newstime'],'Asia/Shanghai').format();
        }
        res.json(rows);
    })
});
// 确认更新
router.post('/update',csrfProtection,function(req, res) {
    var newsid = xss(req.body.id),
        newstype =  xss(req.body.newstype),
        newstitle = xss(req.body.newstitle),
        newsimg = xss(req.body.newsimg),
        newstime = xss(req.body.newstime),
        newssrc = xss(req.body.newssrc);
    connection.query("UPDATE `news` SET `newstype`=?, `newstitle`=?, `newsimg`=?, `newstime`=?,`newssrc` = ? WHERE `id` = ?",[newstype,newstitle,newsimg,newstime,newssrc,newsid],function(err,rows){
       
        res.json({ "code": "success" })
    });
});
// 模态框
router.get('/curnews', function(req, res, next) {
	var newsid =req.query.newsid;
    connection.query('SELECT * FROM `news` WHERE `id`=?', [newsid],function(err, rows) {
        for(var i=0;i<rows.length;i++){
            rows[i]['newstitle']=xss(rows[i]['newstitle']);
            rows[i]['newstime']=moment.tz(rows[i]['newstime'],'Asia/Shanghai').format();
        }
        res.json(rows);
    })
});
// 删除

router.post('/delete',csrfProtection， function(req, res) {
    var newsid = req.body.newsid;
        // newstype = req.query.newstype,
        // newstitle = req.query.newstitle,
        // newsimg = req.query.newsimg,
        // newstime = req.query.newstime,
        // newssrc = req.query.newssrc;
    connection.query("DELETE FROM news WHERE news.id = ? ",[newsid],function(err,result){
         res.json({ "code": "success" });
       console.log(result.affectedDRows)
    });
});
// insert
router.post('/insert',csrfProtection, function(req, res){
    var newstype =  xss(req.body.newstype),
        newstitle = xss(req.body.newstitle),
        newsimg = xss(req.body.newsimg),
        newstime = xss(req.body.newstime),
        newssrc = xss(req.body.newssrc);
    connection.query("INSERT INTO `news` (`newstitle`,`newstype`,`newstime`, `newssrc`,`newsimg`) VALUES (?,?,?,?,?)",[newstitle,newstype,newstime,newssrc,newsimg,newstime],function(err,result){
    	if(!err){
    		console.log(result.insertId);
            res.json({ "code": "success" })
    	}})
});
module.exports = router;
