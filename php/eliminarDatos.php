
<?php 
	require_once "conexion.php";
	$conexion=conexion();
	$id_p=$_POST['id'];

	$sql="DELETE from t_persona where id='$id_p'";
	echo $result=mysqli_query($conexion,$sql);
 ?>