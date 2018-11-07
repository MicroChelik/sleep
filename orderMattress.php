<?php
	$name = $_POST['name'];
	$email = $_POST['email'];
	$phoneNumber = $_POST['phoneNumber'];
	$price = $_POST['price'];
	$size = $_POST['size'];
	$mattress = $_POST['mattress'];

    
	$message = $mattress . ". Размер: " . $size . ". Цена: " . $price	 . '. Заказал: ' . $name . ". Номер телефона:" . $phoneNumber . ". Email:" . $email . ".";
	mail("otec-akk@mail.ru", "Заявка на заказ матраса с сайта Octaspring", $message, 
     "From: mrpicklericklez@yandex.ru \r\n" 
    ."X-Mailer: PHP/" . phpversion());
    header('Location: http://octaspring.ruson.su/#products',true, 301);
    return;
?>