<?php
/**
 * Returns the list of user.
 */
require 'connect.php';

$user = [];
$id = ($_GET['id'] !== null && (int)$_GET['id'] > 0)? mysqli_real_escape_string($con, (int)$_GET['id']) : false;

$sql = "SELECT * FROM categories where id=$id";

if($result = mysqli_query($con,$sql))
{
  $row = mysqli_fetch_assoc($result);
  $user = $row;

  echo json_encode($user);
}
else
{
  http_response_code(404);
}
?>
