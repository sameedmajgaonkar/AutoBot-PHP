<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "chatbot";

$conn = mysqli_connect($servername, $username, $password, $dbname);

if (!$conn) {
  die("Connection failed: " . mysqli_connect_error());
}

$sql = "SELECT * FROM chatbot_responses";
$result = mysqli_query($conn, $sql);
$fetch_data = mysqli_fetch_all($result, MYSQLI_ASSOC);
exit(json_encode($fetch_data));
?>