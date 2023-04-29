<?php
// Connect to the database
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "chatbot";

$conn = mysqli_connect($servername, $username, $password, $dbname);

// Check connection
if (!$conn) {
  die("Connection failed: " . mysqli_connect_error());
}

// Look for a matching response in the database
$sql = "SELECT * FROM chatbot_responses";
$result = mysqli_query($conn, $sql);
$fetch_data = mysqli_fetch_all($result, MYSQLI_ASSOC);
exit(json_encode($fetch_data));
?>