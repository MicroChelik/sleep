<?php
 
if (isset($_POST['g-recaptcha-response'])) $captcha_response = $_POST['g-recaptcha-response'];
else die('На форме нет капчи! Обратитесь к администратору!');
 
$url = 'https://www.google.com/recaptcha/api/siteverify';
$params = [
    'secret' => '6LdkqnoUAAAAAKQV6mkn93Nxne1L1j1GQ6SC0bJ9',
    'response' => $captcha_response,
    'remoteip' => $_SERVER['REMOTE_ADDR']
];
 
$ch = curl_init($url);
curl_setopt($ch, CURLOPT_POST, 1);
curl_setopt($ch, CURLOPT_POSTFIELDS, $params);
curl_setopt($ch, CURLOPT_FOLLOWLOCATION, 1);
curl_setopt($ch, CURLOPT_HEADER, 0);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
 
$response = curl_exec($ch);
if(!empty($response)) $decoded_response = json_decode($response);
 
$success = false;
 
if ($decoded_response && $decoded_response->success)
{
    $success = $decoded_response->success;
}
 
$result = $success ? 'Капча пройдена успешно!' : 'Неверная капча!';
echo $result;