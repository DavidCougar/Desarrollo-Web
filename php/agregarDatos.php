<?php 

	require_once "conexion.php";
	$conexion=conexion();
	$n=$_POST['nombre'];
	$a=$_POST['apellido'];
	$e=$_POST['email'];
	$t=$_POST['telefono'];


if($n== null || $a== null || $e== null || $t== null)
{
alert("campos vacios");
}
else
{
	$sql="INSERT into t_persona (nombre,apellido,email,telefono)
								values ('$n','$a','$e','$t')";
	echo $result=mysqli_query($conexion,$sql);	
}







 ?>