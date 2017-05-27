<?php
	header("content-type:application/json;charset=utf-8");
	// 链接服务器端口php
	require_once('db.php');
	// 判断是否连上
	if($link){
		$newsid = $_POST['newsid'];
		// 解决乱码问题
		mysqli_query($link,"SET NAMES utf8");

		$sql = "DELETE FROM `news` WHERE `news`.`id` = {$newsid}";

		mysqli_query($link,$sql);

			// 返回一个json数据回去
			echo json_encode(array('删除状态'=>'成功'));
		
		}
	
	//关闭链接
	mysqli_close($link);

?>