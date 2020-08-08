<?php
include_once("connect.php");
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Credentials: true');
header("Access-Control-Allow-Methods: PUT, GET, POST, DELETE");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header("Content-Type: application/json; charset=UTF-8");

$sql = "SELECT * FROM user where login=:login and password=:password";

$query = $dbh->prepare($sql);
$postdata = file_get_contents("php://input");
$request= json_decode($postdata);
$user=mysqli_real_escape_string($con, trim($request->username));
$pwd=mysqli_real_escape_string($con, trim($request->password));

$query->execute(['login'=>$user,'password'=>$pwd]);

$result = $query->fetch();

if($query->rowCount()){
echo json_encode("password correct");
}else {

echo json_encode("please check the password or email");
}

?>