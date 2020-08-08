<?php
require 'connect.php';
error_reporting(E_ERROR);
$user=[];
$sql="SELECT * FROM emploi";
if($result=mysqli_query($con,$sql))
{

$cr=0;
while($row=mysqli_fetch_assoc($result))
{
$user[$cr]['id']=$row['id'];
$user[$cr]['id_groupe']=$row['id_groupe'];
$user[$cr]['fichier']=$row['fichier'];
$user[$cr]['name_formateur']=$row['name_formateur'];
$user[$cr]['id_formation']=$row['id_formation'];
$cr++;  
}
header('Access-Control-Allow-Origin: *');

echo $jsonformat=json_encode($user);
}
else{
    http_response_code(404);
}