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
$description=mysqli_real_escape_string($con, trim($request->description));
$duree=mysqli_real_escape_string($con, trim($request->duree));
$id_categorie=mysqli_real_escape_string($con, trim($request->id_categorie));

$sql="INSERT INTO `formations`(`titre`, `description`, `date`, `duree`, `id_categorie`) 
VALUES('".$titre."','".$date."','".$description."','".$duree."','".$id_categorie."') ";

if($result=mysqli_query($con,$sql))
{
    http_response_code(204);
}
else{
    echo $sql;
}




}