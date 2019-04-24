$(document).ready(function(){

    $.ajax({
    url:"ajax/getInfo.php?accion=Edificio",
        data:"",
        method:"POST",
        success:function(respuesta){

          $("#slc-edificio").html(respuesta);
        },
        error:function(e){

           console.log(e);
        }

 });

 $.ajax({
    url:"ajax/getInfo.php?accion=asignaturasT",
        data:"",
        method:"POST",
        success:function(respuesta){

          $("#slc-materia").html(respuesta);
        },
        error:function(e){

           console.log(e);
        }
});

$("#slc-edificio").click(function(){
	$.ajax({
		url:"ajax/getInfo.php?accion=aula",
			data:"codigoEdificio="+$('#slc-edificio').val(),
			method:"POST",
			success:function(respuesta){
	
			  $("#slc-aula").html(respuesta);
			},
			error:function(e){
	
			   console.log(e);
			}
	});
	
})

});


/*****Validacion******/
function validarCampoVacio(campo){
    if (document.getElementById(campo).value ==''){   
        document.getElementById(campo).classList.add('input_error');
        document.getElementById('div-error').style.display = 'block';
        return false;
    }else{
        document.getElementById(campo).classList.remove('input_error');
        document.getElementById('div-error').style.display = 'none';
        return true;
    }
}

function validarCupos(cupos){
  var num = /^[0-9]{2}$/;
  if(num.test(cupos.value)){
    cupos.classList.remove('input_error');
    document.getElementById('div-error3').style.display = 'none';
  }else{
     cupos.classList.add('input_error');
     document.getElementById('div-error3').style.display = 'block';
  }
}

function validarSeccion(asd){
  var exp = /^[0-9]{4}$/;
  if(exp.test(asd.value)){
    asd.classList.remove('input_error');
     document.getElementById('div-error1').style.display = 'none';
  }else{
     asd.classList.add('input_error');
      document.getElementById('div-error1').style.display = 'block';
  }
}
/**************************/

$("#btn-crearSeccion").click(function(){
	var campos = [
        {campo:'slc-materia',valido:false},
        {campo:'slc-edificio',valido:false},
        {campo:'slc-aula',valido:false},
        {campo:'slc-horaInicial',valido:false},
        {campo:'slc-horaFinal',valido:false},
        {campo:'txt-nombreSeccion',valido:false},
        {campo:'txt-numeroCupos',valido:false} 
    ];
    
    for (var i=0;i<campos.length;i++){
        campos[i].valido = validarCampoVacio(campos[i].campo);
    }

    for(var i=0;i<campos.length;i++){
        if (!campos[i].valido)
            return;
	}



	/*if((document.getElementById('slc-horafinal').value) <= (document.getElementById('slc-horaInicial').value)){
		document.getElementById('div-error2').style.display = 'block';
		
	}*/

	if($("#txt-nombreSeccion").val())
		{    
		
		
			if($('#slc-materia').val()){
				if($('#slc-edificio').val()){

					if($('#slc-aula').val()){

						if($('#slc-horaInicial').val()){
							if($('#slc-horaFinal').val()){

								if($('#txt-numeroCupos').val()){
									if($("input[type=checkbox]:checked")){

										var dias = "&dias=";
										//categorias[]=1&lista[]=2&lista[]=3&
									
										$("input[name='week[]']:checked").map(function(){
											dias +=$(this).val();
										});
										
											var parametro = "nombreSeccion="+$("#txt-nombreSeccion").val()+
															"&slc-materia="+$('#slc-materia').val()+
															"&slc-edificio="+$('#slc-edificio').val()+
															"&slc-aula="+$('#slc-aula').val()+
															"&slc-horaInicial="+$('#slc-horaInicial').val()+
															"&slc-horaFinal="+$('#slc-horaFinal').val()+
															"&txt-numeroCupos="+$('#txt-numeroCupos').val()+
															dias;
															$.ajax({		
																url:"ajax/gestion-registro.php?accion1=guardarSeccion",
																	data:parametro,
																	method:"POST",
																	success:function(respuesta){
																	  console.log(respuesta);
																	  alert('Seccion Creada!');
																	  window.location.href='HomeTutor.php';
																	},
																	error:function(e){
												  
																	  console.log(e);
																	}
												  
																});


									}
									else{
									     document.getElementById('div-error').style.display = 'block';
									}
								}
								else{
									document.getElementById('div-error').style.display = 'block';
								}
						
							}
							else{
								document.getElementById('div-error').style.display = 'block';
							}
						
						}
						else{
							document.getElementById('div-error').style.display = 'block';
						}
						
					}
					else{
						document.getElementById('div-error').style.display = 'block';
					}

				}
				else{
					document.getElementById('div-error').style.display = 'block';
				}

			}
			else{
				document.getElementById('div-error').style.display = 'block';
			}
		}
		else{
			document.getElementById('div-error').style.display = 'block';
		}
	 });