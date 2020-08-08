<?php

require 'connect.php';

$postdata=file_get_contents("php://input");//method pour la recuperation des donne 
 
//get content fonction haki haki parametre ta3ha input car les valeur envoyer par formulaire
 
echo isset($postdata) && !empty($postdata);

if(isset($postdata) && !empty($postdata))
{

$request= json_decode($postdata);

$id_groupe=mysqli_real_escape_string($con, trim($request->id_groupe));
$fichier=mysqli_real_escape_string($con, trim($request->fichier));
$name_formateur=mysqli_real_escape_string($con, trim($request->name_formateur));
$name_formation=mysqli_real_escape_string($con, trim($request->name_formation));



$sql="INSERT INTO `emploi`(`id_groupe`, `fichier`, `name_formateur`, `name_formation` )
VALUES('".$name_formateur."','".$fichier."','".$name_formation."','".$id_groupe."') ";

if($result=mysqli_query($con,$sql))
{
    http_response_code(204);
}
else{
    echo $sql;
}




}