<?php
$email = $_POST['email'];
$fio = $_POST['fio'];
$telephone = $_POST['telephone'];

$email = htmlspecialchars($email);
$fio = htmlspecialchars($fio);
$telephone = htmlspecialchars($telephone);

$email = urldecode($email);
$fio = urldecode($fio);
$telephone = urldecode($telephone);

$email = trim($email);
$fio = trim($fio);
$telephone = trim($telephone);

if (mail("integrator58@gmail.com", "Заказ с сайта", "ФИО:".$fio.". E-mail: ".$email ,"integrator58@gmail.com \r\n"))
 {
    echo "Сообщение успешно отправлено";
} else {
    echo "При отправке сообщения возникли ошибки";
}?>
