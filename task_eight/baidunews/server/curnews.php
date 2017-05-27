<?php
 header("content-type:application/json;charset=utf-8");
	// 链接服务器端口php
	require_once('db.php');
// 判断是否连上
	if ($link) {
		$newsid = $_GET['newsid'];
		// 解决乱码问题
		mysqli_query($link,"SET NAMES utf8");

		$sql = "SELECT * FROM `news` WHERE `id` = {$newsid}";

		$result = mysqli_query($link,$sql);
	    $senddata = array();
			while ($row = mysqli_fetch_assoc($result)) {
			array_push($senddata, array(
                        'id' => $row['id'],
                        'newstype' => $row['newstype'],
                        'newstitle' => $row['newstitle'],
                        'newsimg' => $row['newsimg'],
                        'newstime' => $row['newstime'],
                        'newssrc' => $row['newssrc']

			                ));
			        };
			        echo json_encode($senddata);
		       
		
	};
	
mysqli_close($link);
?>