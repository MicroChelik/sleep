<?php
if( !$_POST['g-recaptcha-response']){
	// echo "<script>alert(\"Заполните капчу!\");</script>"; 
	exit('PFdsfsdfoij');
}
else{
$name = $_POST['name'];
$phoneNumber = $_POST['phoneNumber'];
$message = 'Звонок заказал: ' . $name . ". Номер телефона:" . $phoneNumber . " .";
$headers = 'From: OctaspringRuson@yandex.ru' . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

if(mail("mrpicklericklez@yandex.ru", "Заявка на звонок с сайта Octaspring", $message, $headers)):
	die("message sent");
else:
	die("message not sent");
endif;
}
?>