<?php

require 'connect.php';

$postdata=file_get_contents("php://input");

echo isset($postdata) && !empty($postdata);

if(isset($postdata) && !empty($postdata))
{
    $request= json_decode($postdata);
  $titre=mysqli_real_escape_string($con, trim($request->titre));
  $date=mysqli_real_escape_string($con, trim($request->date));
  $description=mysqli_real_escape_string($con, trim($request->description));
  $duree=mysqli_real_escape_string($con, trim($request->duree));
  $id_categorie=mysqli_real_escape_string($con, trim($request->id_categorie));
  $id=mysqli_real_escape_string($con, trim($request->id));

	$sql ="UPDATE `formations` SET `titre`='".$titre."',`date`='".$date."',`description`='".$description."',`duree`='".$duree."',`id_categorie`='".$id_categorie."' WHERE `id`=$id";
	if($result=mysqli_query($con,$sql))
    {
        http_response_code(204);
    }
    else{
        echo $sql;
    }
    
    }
?>