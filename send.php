<?php
$name = $_POST['name'];
$email = $_POST['email'];
$phoneNumber = $_POST['phoneNumber'];
$message = 'Звонок заказал: ' . $name . ". Номер телефона:" . $phoneNumber . ". Email:" . $email . " .";
$headers = 'From: OctaspringRuson@yandex.ru' . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

if(mail("mrpicklericklez@yandex.ru", "Заявка на звонок с сайта Octaspring", $message, $headers)):
	die("message sent");
else:
	die("message not sent");
endif;

?>
