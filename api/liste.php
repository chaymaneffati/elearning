<?php
require 'connect.php';
error_reporting(E_ERROR);
$user=[];
$sql="SELECT * FROM user";
if($result=mysqli_query($con,$sql))
{

$cr=0;
while($row=mysqli_fetch_assoc($result))
{
$user[$cr]['id']=$row['id'];
$user[$cr]['name']=$row['name'];
$user[$cr]['lastname']=$row['lastname'];
$user[$cr]['email']=$row['email'];
$user[$cr]['adress']=$row['adress'];
$user[$cr]['phone']=$row['phone'];
$user[$cr]['login']=$row['login'];
$user[$cr]['password']=$row['password'];
$user[$cr]['Role']=$row['Role'];
$cr++;
}
header('Access-Control-Allow-Origin: *');

echo $jsonformat=json_encode($user);
}
else{
    http_response_code(404);
}