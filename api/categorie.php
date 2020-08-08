<?php
require 'connect.php';
error_reporting(E_ERROR);
$categories=[];
$sql="SELECT * FROM categories";
if($result=mysqli_query($con,$sql))
{

$cr=0;
while($row=mysqli_fetch_assoc($result))
{
$categories[$cr]['id']=$row['id'];
$categories[$cr]['titre']=$row['titre'];

$cr++;
}
header('Access-Control-Allow-Origin: *');

echo $jsonformat=json_encode($categories);
}
else{
    http_response_code(404);
}