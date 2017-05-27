<?php
    header("content-type:application/json;charset=utf-8");
	// 链接服务器端口php
    require_once('db.php');

    if ($link) {
    	// 插入新闻
    	$newstitle = addslashes(htmlspecialchars($_POST['newstitle']));
    	$newstype = addslashes(htmlspecialchars($_POST['newstype']));
    	$newstime = addslashes(htmlspecialchars($_POST['newstime']));
    	$newssrc = addslashes(htmlspecialchars($_POST['newssrc']));
    	$newsimg = addslashes(htmlspecialchars($_POST['newsimg']));
// php语句插值法
    	$sql = "INSERT INTO `news` (`newstitle`,`newstype`,`newstime`,
        `newssrc`,`newsimg`) VALUES ('{$newstitle}','{$newstype}','{$newstime}','{$newssrc}','{$newsimg}')";          

    	mysqli_query($link,"SET NAMES utf8");
        $result = mysqli_query($link,$sql);

        echo json_encode(array('success' => 'ok'));

    };
        mysqli_close($link);
?>