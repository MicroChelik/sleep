<?php
	$name = $_POST['name'];
	$phoneNumber = $_POST['phoneNumber'];

    
	$message = 'Звонок заказал: ' . $name . ". Номер телефона:" . $phoneNumber . " .";
	mail("otec-akk@mail.ru", "Заявка на звонок с сайта Octaspring", $message, 
     "From: mrpicklericklez@yandex.ru \r\n" 
    ."X-Mailer: PHP/" . phpversion());
    header('Location: http://sleep/',true, 301);
    return;
?>