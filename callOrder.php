<?php
$name = $_POST['name'];
$phoneNumber = $_POST['phoneNumber'];
$message = 'Звонок заказал: ' . $name . ". Номер телефона:" . $phoneNumber . " .";
$headers = 'From: OctaspringRuson@yandex.ru' . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

if(mail("ruson.izh@yandex.ru", "Заявка на звонок с сайта Octaspring", $message, $headers)):
	die("message sent");
else:
	die("message not sent");
endif;

?>