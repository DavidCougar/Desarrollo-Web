<?php 
	session_start();

	$idpersona=$_POST['valor'];

	$_SESSION['consulta']=$idper;

	echo $idpersona;

 ?>