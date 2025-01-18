<?php
// database connection code
if(isset($_POST['EmailAddress']))
{
// $con = mysqli_connect('localhost', 'database_user', 'database_password','database');
$con = mysqli_connect('localhost', 'root', '','db_contact');

// get the post records

$EmailAddress = $_POST['EmailAddress'];
$UserName = $_POST['UserName'];
$Password = $_POST['Password'];
// $txtMessage = $_POST['txtMessage'];

// database insert SQL code
$sql = "INSERT INTO `registerform` (`EmailAddress`, `UserName`, `Password`) VALUES ('$EmailAddress', '$UserName', '$Password')";

// insert in database 
$rs = mysqli_query($con, $sql);
if($rs)
{
	echo "Contact Records Inserted";
}
}
else
{
	echo "Are you a genuine visitor?";
	
}
?>