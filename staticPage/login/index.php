<?php
	include_once "include/ez_sql_core.php";
	include_once "include/ez_sql_mysql.php";
	$db = new ezSQL_mysql();
	session_start();
	$curuserid=isset($_SESSION["curuserid"])?$_SESSION["curuserid"]:"";
	$curusername=isset($_SESSION["curusername"])?$_SESSION["curusername"]:"";
	if($curuserid==""){
		header("location:login.php?error=needlogin");
		die();
	}else{
		echo " welcome  ".$curusername;	
	}
?>
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" /> 
	<link rel="stylesheet" type="text/css" href="css/index.css">
	<title>首页</title>
</head>
<body> 
	<form action="logout.php" method="post">
		<input type="submit" value="退出登录">
	</form>
	<div class="user">
		<div class="userInfo">
			<?php
				$users = $db->get_results("SELECT userNickname, friendNoteName,userHeadImage FROM friendsinfo,userinfo where userid='".$curuserid."' and friendsinfo.friendid=userinfo.id");
				$userCount=$db->get_var("select count(*) from userInfo");
				 foreach ( $users as $user )
				 {
					echo '<div class="userInfoItem">';
					echo	'<div class="userInfo_userName">';
					echo    	"<img src='$user->userHeadImage'>";
		            echo '	</div>';
		            echo '	<div class="userInfo_userAge">';
		            echo 		$user->friendNoteName;
		            echo '	</div>';
		             echo '	<div class="userInfo_userAge">';
		            echo 		$user->userNickname;
		            echo '	</div>';
		            echo '</div>';
				}
				//$db->query("INSERT INTO userInfo (userName,userPwd,userAge) VALUES (N'苏三','123','19')");
			?>
		</div>
		<!-- <ul class="addUser">
			<li><input type="text" placeholder="用户名……"></li>
			<li><input type="text" placeholder="密码……"></li>
			<li><input type="text" placeholder="年龄……"></li>
			<li><div class="addUserBtn">添加</div></li>
		</ul> -->
	</div>
</body>
</html>
