<?php
$name = $_POST['name'];
$email = $_POST['email'];
$phoneNumber = $_POST['phoneNumber'];
$text = $_POST['text'];
$message = 'Имя: ' . $name . ". Номер телефона: " . $phoneNumber . ". Email: " . $email . ". Текст: " . $text . " ." ;
$headers = 'From: OctaspringRuson@yandex.ru' . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

if(mail("mrpicklericklez@yandex.ru", "Заявка на партнерство с сайта Octaspring", $message, $headers)):
	die("message sent");
else:
	die("message not sent");
endif;

?>