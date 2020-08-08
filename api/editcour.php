<?php

require 'connect.php';

$postdata=file_get_contents("php://input");

echo isset($postdata) && !empty($postdata);

if(isset($postdata) && !empty($postdata))
{

    $titre=mysqli_real_escape_string($con, trim($request->titre));
    $date=mysqli_real_escape_string($con, trim($request->date));
    $fichier=mysqli_real_escape_string($con, trim($request->fichier));
    $id_formateur=mysqli_real_escape_string($con, trim($request->id_formateur));
    $id_formation=mysqli_real_escape_string($con, trim($request->id_formation));
    $id=mysqli_real_escape_string($con, trim($request->id));

	$sql ="UPDATE `cour` SET `titre`='".$titre."',`date`='".$date."',`fichier`='".$fichier."',`id_formateur`='".$id_formateur."',`id_formation`='".$id_formation."' WHERE `id`=$id";
	if($result=mysqli_query($con,$sql))
    {
        http_response_code(204);
    }
    else{
        echo $sql;
    }
    
    }
?>