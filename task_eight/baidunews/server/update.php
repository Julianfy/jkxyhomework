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
        $newsid = addslashes(htmlspecialchars($_POST['id']));
    	// $sql = "UPDATE `news` SET (`newstitle`,`newsimg`,`newssrc`,`newstime`,`newstype`) VALUES ('{$newstitle}','{$newsimg}','{$newssrc}','{$newstime}','{$newstype}') WHERE `id`={$newsid}";
        $sql = "UPDATE `news` SET `newstype`='$newstype', `newstitle`='$newstitle', `newsimg`='$newsimg', `newstime`='$newstime', `newssrc`='$newssrc' WHERE `id` = {$newsid}";

    	mysqli_query($link,"SET NAMES utf8");
        $result = mysqli_query($link,$sql); 

        echo json_encode(array('success' => $sql));

    }
mysqli_close($link);
?>