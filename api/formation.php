<?php
require 'connect.php';
error_reporting(E_ERROR);
$user=[];
$sql="SELECT formations.*, cat.titre as nom FROM formations,categories cat where formations.id_categorie=cat.id";
if($result=mysqli_query($con,$sql))
{

$cr=0;
while($row=mysqli_fetch_assoc($result))
{
$user[$cr]['id']=$row['id'];
$user[$cr]['titre']=$row['titre'];
$user[$cr]['date']=$row['date'];
$user[$cr]['description']=$row['description'];
$user[$cr]['duree']=$row['duree'];
$user[$cr]['nom']=$row['nom'];
$cr++;
}
header('Access-Control-Allow-Origin: *');

echo $jsonformat=json_encode($user);
}
else{
    http_response_code(404);
}