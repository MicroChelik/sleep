<?php
$name = $_POST['name'];
$email = $_POST['email'];
$phoneNumber = $_POST['phoneNumber'];
$message = 'Звонок заказал: ' . $name . ". Номер телефона:" . $phoneNumber . ". Email:" . $email . " .";
$headers = 'From: mrpicklericklez@yandex.ru' . "\r\n" .
    'X-Mailer: PHP/' . phpversion();
 
if(mail("otec-akk@mail.ru", "Заявка на звонок с сайта Octaspring", $message, $headers)):
	// echo "message sent";
	header('Location: http://octaspring.ruson.su/#help',true, 301);
else:
	echo "message not sent";
endif;

?>