<?php
header('Content-type: application/json; charset=utf-8');

// Variables y validaciones
$nom = $_POST['nombre'];
$ape = $_POST['apellidos'];
$tel = $_POST['telefono'];
$cor = $_POST['correo'];
$ruc = $_POST['ruc'];
$men = $_POST['mensaje'];

if( strlen($nom) < 3 ){
	$rspmail = [
		'result' => false,
		'msg' => 'Nombre debe tener mas de 3 caracteres'
	];
	die(json_encode($rspmail));
}
if( strlen($ape) < 3 ){
	$rspmail = [
		'result' => false,
		'msg' => 'Apellidos debe tener mas de 3 caracteres'
	];
	die(json_encode($rspmail));
}
if( !is_numeric($tel) ){
	$rspmail = [
		'result' => false,
		'msg' => 'Telefono debe contener solo números'
	];
	die(json_encode($rspmail));
}
if( strlen($tel) < 9 ){
	$rspmail = [
		'result' => false,
		'msg' => 'Telefono debe tener mas de 9 caracteres'
	];
	die(json_encode($rspmail));
}
if ( !filter_var($cor, FILTER_VALIDATE_EMAIL) ) {
	$rspmail = [
		'result' => false,
		'msg' => 'Correo electronico no tiene formato adecuado'
	];
	die(json_encode($rspmail));
}

// Armando mensaje
$email_content = "Informacion del mensaje:<br /><br />";

$email_content .= "Nombre: <br />".$nom."<br /><br />";
$email_content .= "Apellidos: <br />".$ape."<br /><br />";
$email_content .= "Telefono: <br />".$tel."<br /><br />";
$email_content .= "Correo: <br />".$cor."<br /><br />";
$email_content .= "RUC: <br />".$ruc."<br /><br />";
$email_content .= "Mensaje: <br />".$men."<br /><br />";

$email_content .= "--<br />El e-mail fue enviado a través del formulario de la web.";

// Destinatarios :
$recipient = 'cvalverde@5c.com.pe';
//$cc = 'otro@mail.pe';

// Configuracion del cabecera
$subject = 'Contacto desde la web';
$from_name = '5C Maquinaria Pesada';
$mail_no_reply = 'no-reply@5c.com.pe';

// Construyendo cabeceras
$email_headers = "From: $from_name <$mail_no_reply> \r\n";
//$email_headers .= "Cc: $cc \r\n";
$email_headers .= "MIME-Version: 1.0\r\n";
$email_headers .= "Content-Type: text/html; utf-8\r\n";
$email_headers .= "Content-Transfer-Encoding: 8bit\r\n";

// Enviando el mensaje
if (mail($recipient, $subject, $email_content, $email_headers)) {
	$rspmail = [
		'result' => true,
		'msg' => 'Envio correcto del correo'
	];
} else {
	$rspmail = [
		'result' => false,
		'msg' => 'Oops! Algo salio mal y no pudimos enviar tu mensaje.'
	];
}
die(json_encode($rspmail));
?>