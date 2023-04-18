<?php

$servername = "sql4.freesqldatabase.com	";
$username = "sql4481107";
$password = "FG8QPNs5q3";
$db = "sql4481107";

// Create connection

$Conn = mysqli_connect($servername, $username, $password, $db);

// Check connection

if (!$conn) {
   die("Connection failed: " . mysqli_connect_error());
}
echo "Connected successfully";



$result= mysql_query( "SELECT * FROM Movies ORDER BY rand()" ) 
or die("SELECT Error: ".mysql_error()); 

echo $result;


?>