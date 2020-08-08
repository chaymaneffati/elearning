<?php

require 'connect.php';

$postdata=file_get_contents("php://input");

echo isset($postdata) && !empty($postdata);

if(isset($postdata) && !empty($postdata))
{
    $request= json_decode($postdata);

    $titre=mysqli_real_escape_string($con, trim($request->titre));
    $id=mysqli_real_escape_string($con, trim($request->id));

	$sql ="UPDATE `categories` SET `titre`='".$titre."' WHERE `id`=$id";
	if($result=mysqli_query($con,$sql))
    {
        http_response_code(204);
    }
    else{
        echo $sql;
    }
    
    }
?>