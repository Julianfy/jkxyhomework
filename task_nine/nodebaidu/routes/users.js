var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var dbconnection = require("./db");
/*admin  */
var connection = mysql.createPool(dbconnection);
router.get('/getnews', function(req, res, next) {
    connection.query('SELECT * FROM `news` order by id desc limit 10', function(err,rows) {
        res.json(rows);
    })
});
// 确认更新
router.post('/update', function(req, res) {
    var newsid = req.body.id,
        newstype = req.body.newstype,
        newstitle = req.body.newstitle,
        newsimg = req.body.newsimg,
        newstime = req.body.newstime,
        newssrc = req.body.newssrc;
    connection.query("UPDATE `news` SET `newstype`=?, `newstitle`=?, `newsimg`=?, `newstime`=?,`newssrc` = ? WHERE `id` = ?",[newstype,newstitle,newsimg,newstime,newssrc,newsid],function(err,rows){
       
        res.json({ "code": "success" })
    });
});
// 模态框
router.get('/curnews', function(req, res, next) {
	var newsid =req.query.newsid;
    connection.query('SELECT * FROM `news` WHERE `id`=?', [newsid],function(err, rows) {
        res.json(rows);
    })
});
// 删除

router.post('/delete', function(req, res) {
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
router.post('/insert', function(req, res){
    var newstype = req.body.newstype,
        newstitle = req.body.newstitle,
        newsimg = req.body.newsimg,
        newstime = req.body.newstime,
        newssrc = req.body.newssrc;
    connection.query("INSERT INTO `news` (`newstitle`,`newstype`,`newstime`, `newssrc`,`newsimg`) VALUES (?,?,?,?,?)",[newstitle,newstype,newstime,newssrc,newsimg,newstime],function(err,result){
    	if(!err){
    		console.log(result.insertId);
            res.json({ "code": "success" })
    	}})
});
module.exports = router;
