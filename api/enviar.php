<?php
date_default_timezone_set('America/Sao_Paulo');

require_once('src/PHPMailer.php');
require_once('src/SMTP.php');
require_once('src/Exception.php');

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

if((isset($_POST['email']) && !empty(trim($_POST['email']))) && (isset($_POST['telefone']) && !empty(trim($_POST['telefone'])))) {

	$nome = !empty($_POST['nome']) ? $_POST['nome'] : 'Não informado';
	$email = $_POST['email'];
	$telefone = $_POST['telefone'];
	$data = date('d/m/Y H:i:s');

	$mail = new PHPMailer();
	$mail->isSMTP();
	$mail->Host = 'smtp.gmail.com';
	$mail->SMTPAuth = true;
	$mail->Username = 'adrianoa.ramos10@gmail.com';
	$mail->Password = 'nfdkjjtjvpuleudi';
	$mail->Port = 587;

	$mail->setFrom('adrianoa.ramos10@gmail.com');
	$mail->addAddress('adrianoa.ramos10@gmail.com');

	$mail->isHTML(true);
	$mail->Subject = 'Contato realizado no site da Taurus.';
	$mail->Body = "Nome: {$nome}<br>
				   Email: {$email}<br>
				   Telefone Ou Whatsapp: {$telefone}<br>
				   Data/hora: {$data}";

	if($mail->send()) {
		echo 'Email enviado com sucesso.';
	} else {
		echo 'Email não enviado.';
	}
} else {
	echo 'Não enviado: informar o email e a mensagem.';
}
