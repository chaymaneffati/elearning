<?php

require 'connect.php';

$postdata=file_get_contents("php://input");

echo isset($postdata) && !empty($postdata);

if(isset($postdata) && !empty($postdata))
{

    $id_groupe=mysqli_real_escape_string($con, trim($request->id_groupe));
    $fichier=mysqli_real_escape_string($con, trim($request->fichier));
    $name_formateur=mysqli_real_escape_string($con, trim($request->name_formateur));
    $name_formation=mysqli_real_escape_string($con, trim($request->name_formation));
    $id=mysqli_real_escape_string($con, trim($request->id));

	$sql ="UPDATE `emploi` SET `id_groupe`='".$id_groupe."',`fichier`='".$fichier."',`name_formateur`='".$name_formateur."',`name_formation`='".$name_formation."' WHERE `id`=$id";
	if($result=mysqli_query($con,$sql))
    {
        http_response_code(204);
    }
    else{
        echo $sql;
    }
    
    }
?>