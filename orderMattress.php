<?php
$name = $_POST['name'];
$email = $_POST['email'];
$phoneNumber = $_POST['phoneNumber'];
$price = $_POST['price'];
$size = $_POST['size'];
$mattress = $_POST['mattress'];
$message = $mattress . ". Размер: " . $size . ". Цена: " . $price	 . '. Заказал: ' . $name . ". Номер телефона:" . $phoneNumber . ". Email:" . $email . ".";
$headers = 'From: OctaspringRuson@yandex.ru' . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

if(mail("ruson.izh@yandex.ru", "Заявка на заказ матраса с сайта Octaspring", $message, $headers)):
	die("message sent");
else:
	die("message not sent");
endif;

?>