<?php

require 'connect.php';

$postdata=file_get_contents("php://input");//method pour la recuperation des donne 
 
//get content fonction haki haki parametre ta3ha input car les valeur envoyer par formulaire
 
echo isset($postdata) && !empty($postdata);

if(isset($postdata) && !empty($postdata))
{

$request= json_decode($postdata);
$titre=mysqli_real_escape_string($con, trim($request->titre));



$sql="INSERT INTO `categories`(`titre`)
VALUES('".$titre."') ";

if($result=mysqli_query($con,$sql))
{
    http_response_code(204);
}
else{
    echo $sql;
}




}