<?php
include_once("connect.php");
$postdata = file_get_contents("php://input");
$request = json_decode($postdata);
if(isset($postdata) && !empty($postdata))
{
 $name=mysqli_real_escape_string($con, trim($request->name));
$lastname=mysqli_real_escape_string($con, trim($request->lastname));
$email=mysqli_real_escape_string($con, trim($request->email));
$adress=mysqli_real_escape_string($con, trim($request->adress));
$phone=mysqli_real_escape_string($con, trim($request->phone));
$login=mysqli_real_escape_string($con, trim($request->login));
$password=mysqli_real_escape_string($con, trim($request->password));
$Role=mysqli_real_escape_string($con, trim($request->Role));

 $sql="INSERT INTO user (name, lastname, email, adress, phone, login, password, Role) VALUES ('{$name}', '{$lastname}', '{$email}', '{$adress}', '{$phone}', '{$login}', '{$password}', '{$Role}');";

 // echo $sql;
if ($mysqli->query($sql) === TRUE) {
 
 
    $authdata = [
      'name' => $name,
	    'pwd' => '',
	    'email' => $email,
      'adress' => $adress,
      'lastname' => $lastname,
      'phone' => $phone,
      'login' => $login,
      'Role' => $Role,

      'Id'    => mysqli_insert_id($mysqli)
    ];
    echo json_encode($authdata);
 
}
}
?>