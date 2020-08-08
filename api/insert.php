<?php

require 'connect.php';

$postdata=file_get_contents("php://input");//method pour la recuperation des donne 
 
//get content fonction haki haki parametre ta3ha input car les valeur envoyer par formulaire
 
echo isset($postdata) && !empty($postdata);

if(isset($postdata) && !empty($postdata))
{

$request= json_decode($postdata);

$name=mysqli_real_escape_string($con, trim($request->name));
$lastname=mysqli_real_escape_string($con, trim($request->lastname));
$email=mysqli_real_escape_string($con, trim($request->email));
$adress=mysqli_real_escape_string($con, trim($request->adress));
$phone=mysqli_real_escape_string($con, trim($request->phone));
$login=mysqli_real_escape_string($con, trim($request->login));
$password=mysqli_real_escape_string($con, trim($request->password));
$Role=mysqli_real_escape_string($con, trim($request->Role));

$sql="INSERT INTO user (name, lastname, email, adress, phone, login, password, Role) VALUES ('{$name}', '{$lastname}', '{$email}', '{$adress}', '{$phone}', '{$login}', '{$password}', '{$Role}');";

if($result=mysqli_query($con,$sql))
{
    http_response_code(204);
}
else{
    echo $sql;
}




}