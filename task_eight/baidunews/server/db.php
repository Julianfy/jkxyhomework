<?php
 header("content-type:application/json;charset=utf-8");
	$link =  mysqli_connect('localhost','root','','baidunews',3306);
	echo json_encode(array('链接成功'=>'返回数据'));

?>