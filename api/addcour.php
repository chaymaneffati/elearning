<?php

require 'connect.php';

$postdata=file_get_contents("php://input");//method pour la recuperation des donne 
 
//get content fonction haki haki parametre ta3ha input car les valeur envoyer par formulaire
 
echo isset($postdata) && !empty($postdata);

if(isset($postdata) && !empty($postdata))
{

$request= json_decode($postdata);

$titre=mysqli_real_escape_string($con, trim($request->titre));
$date=mysqli_real_escape_string($con, trim($request->date));
$fichier=mysqli_real_escape_string($con, trim($request->fichier));
$id_formateur=mysqli_real_escape_string($con, trim($request->id_formateur));
$id_formation=mysqli_real_escape_string($con, trim($request->id_formation));

$sql="INSERT INTO `cour`(`titre`, `date` , `fichier`, `id_formateur`, `id_formation`)
VALUES('".$titre."','".$date."','".$fichier."','".$id_formateur."','".$id_formation."') ";

if($result=mysqli_query($con,$sql))
{
    http_response_code(204);
}
else{
    echo $sql;
}




}