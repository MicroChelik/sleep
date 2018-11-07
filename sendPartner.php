<?php
	$name = $_POST['name'];
	$email = $_POST['email'];
	$phoneNumber = $_POST['phoneNumber'];
	$text = $_POST['text'];


	$message = 'Имя: ' . $name . ". Номер телефона: " . $phoneNumber . ". Email: " . $email . ". Текст: " . $text . " ." ;
	mail("otec-akk@mail.ru", "Заявка на партнерство с сайта Octaspring", $message, 
     "From: mrpicklericklez@yandex.ru \r\n" 
    ."X-Mailer: PHP/" . phpversion());
    header('Location: http://octaspring.ruson.su/#contacts',true, 301);
    return;
?>