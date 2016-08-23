<?php
	session_start();
	unset($_SESSION["curuserid"]);
	unset($_SESSION["curusername"]);
	header("location:login.php");
?>