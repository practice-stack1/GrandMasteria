<?php
	use PHPMailer\PHPMailer\PHPMailer;
	use PHPMailer\PHPMailer\Exception;

	require 'phpmailer/src/Exception.php';
	require 'phpmailer/src/PHPMailer.php';

	$mail = new PHPMailer(true);
	$mail->CharSet = 'UTF-8';
	$mail->setLanguage('ru', 'phpmailer/language/');
	$mail->IsHTML(true);

	//От кого письмо
	$mail->setFrom('vadim3d2011@gmail.com', 'from Grand Masteria');
	//Кому отправить
	$mail->addAddress('improvemylife25@gmail.com');
	//Тема письма
	$mail->Subject = 'Доброго дня! Відзвонить на номер вказаний в листі';


	//Тело письма
	$body = '<h1>Лист від користувача Grand Masteria</h1>';


	if(trim(!empty($_POST['name']))){
		$body.='<p><strong>Ім`я:</strong> '.$_POST['name'].'</p>';
	}
	if(trim(!empty($_POST['email']))){
		$body.='<p><strong>Phone:</strong> '.$_POST['phone'].'</p>';
	}


	$mail->Body = $body;


	if (!$mail->send()) {
		$message = 'Ошибка';
	} else {
		$message = 'Данные отправлены!';
	}

	$response = ['message' => $message];

	header('Content-type: application/json');
	echo json_encode($response);
?>