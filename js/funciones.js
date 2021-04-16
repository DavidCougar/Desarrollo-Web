

function agregardatos(nombre,apellido,email,telefono){

	cadena="nombre=" + nombre + 
			"&apellido=" + apellido +
			"&email=" + email +
			"&telefono=" + telefono;

	$.ajax({
		type:"POST",
		url:"php/agregarDatos.php",
		data:cadena,
		success:function(r){
			if(r==1){
				$('#tabla').load('componentes/tabla.php');
				 $('#buscador').load('componentes/buscador.php');
Swal.fire({
  position: 'top-end',
  icon: 'success',
  title: 'Registro Exitoso',
  showConfirmButton: false,
  timer: 1500
});

setTimeout(function(){ location.reload(); }, 1600);
			}else{
			Swal.fire({
  icon: 'error',
  title: 'Algo falló',
  text: 'Error 404 no  found'
})
			}
		}
	});

}

function agregaform(datos){

	d=datos.split('||');

	$('#idpersona').val(d[0]);
	$('#nombreu').val(d[1]);
	$('#apellidou').val(d[2]);
	$('#emailu').val(d[3]);
	$('#telefonou').val(d[4]);
	
}

function actualizaDatos(){


	id=$('#idpersona').val();
	nombre=$('#nombreu').val();
	apellido=$('#apellidou').val();
	email=$('#emailu').val();
	telefono=$('#telefonou').val();

	cadena= "id=" + id +
			"&nombre=" + nombre + 
			"&apellido=" + apellido +
			"&email=" + email +
			"&telefono=" + telefono;

	$.ajax({
		type:"POST",
		url:"php/actualizaDatos.php",
		data:cadena,
		success:function(r){
			
			if(r==1){
				$('#tabla').load('componentes/tabla.php');

				Swal.fire({
  position: 'top-end',
  icon: 'success',
  title: 'Actualizacion Exitosa',
  showConfirmButton: false,
  timer: 1500
});

setTimeout(function(){ location.reload(); }, 1600);
			}else{
				alertify.error("Error 404 no  found");
			}
		}
	});

}

function preguntarSiNo(id){
Swal.fire({
  title: '¿Esta seguro de eliminar este registro?',
  text: "Esta acción no se puede revertir!",
  icon: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Si, Eliminar!',
  cancelButtonText: 'No, Cancelar',
}).then((result) => {
  if (result.isConfirmed) {
  	 eliminarDatos(id);
    Swal.fire(
      'Eliminado!',
      'Registro eliminado.',
      'success'
    )
  }
setTimeout(function(){ location.reload(); }, 1600);
})






}





function eliminarDatos(id){

	cadena="id=" + id;

		$.ajax({
			type:"POST",
			url:"php/eliminarDatos.php",
			data:cadena,
			success:function(r){
				if(r==1){
					$('#tabla').load('componentes/tabla.php');
				}
			}
		});
}