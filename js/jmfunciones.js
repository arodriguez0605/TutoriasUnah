$(document).ready(function(){
$.ajax({
 url:"ajax/getInfo.php?accion=centroEstudio",
        data:"",
        method:"POST",
        success:function(respuesta){

          $("#slc-centroEstudio").html(respuesta);
        },
        error:function(e){

           console.log(e);
        }

 });


        $("#div-contenedor").html('<div class="spinner-border" role="status">'+
          '<span class="sr-only">Loading...</span>'+
          '</div>');
 $.ajax({
  url:"ajax/getInfo.php?accion=departamentoclase",
         data:"",
         method:"POST",
         success:function(respuesta){
 
           $("#div-contenedor").html(respuesta);
         },
         error:function(e){
 
            console.log(e);
         }
 
  });
  

  $.ajax({
    
    url:"ajax/getInfo.php?accion=asignaturas",
           data:"",
           method:"POST",
           success:function(respuesta){
   
             $("#div-contenedor-2").html(respuesta);
           },
           error:function(e){
   
              console.log(e);
           }
   
    });


});







$("#btn-verificar-correo").click(function(){

   var parametro ='txt-correo='+$("#recipient-correo").val();
    $.ajax({
        url:"ajax/gestion-usuario.php?accion=verificar_correo",
        data: parametro,
        method:"POST",
        dataType:'json',
        success: function(respuesta){
            if(respuesta.estatus == 1)
            {
             // $("#div-pregunta").html(respuesta.respuesta1);
             $("#label-pregunta").html(respuesta.respuesta1)
              document.getElementById('div-pregunta').style.display ='inherit';
            }
            else{
              alert("No se encontro la cuenta.");
            }
        },
        error:function(e){
                      
          console.log(e);
          
          }

    })



});


$("#btn-verificar-respuesta").click(function(){
  var parametro ='txt-correo='+$("#recipient-correo").val()+'&txt-respuesta2='+$("#txt-respuesta2").val();
  $.ajax({
      url:"ajax/gestion-usuario.php?accion=verificar_respuesta",
      data: parametro,
      method:"POST",
      dataType:'json',
      success: function(respuesta){
          if(respuesta.estatus == 1)
          {
            alert(respuesta.respuesta1);
            window.location = "index.php";

          }
          else{
            alert("Respuesta Incorrecta.");
          }
      },
      error:function(e){
                    
        console.log(e);
        
        }

  })

})

$("#slc-centroEstudio").click(function(){

    var parametro = "slc-centroEstudio="+ $('#slc-centroEstudio').val();
		$.ajax({
 		url:"ajax/getInfo.php?accion=departamentos",
        data:parametro,
        method:"POST",
        success:function(respuesta){

          $("#departamento").html(respuesta);
        },
        error:function(e){

           console.log(e);
        }

 });
   
  	$.ajax({
 		url:"ajax/getInfo.php?accion=ciudades",
        data:parametro,
        method:"POST",
        success:function(respuesta){

          $("#ciudad").html(respuesta);
        },
        error:function(e){

           console.log(e);
        }

 });

  $.ajax({
  url:"ajax/getInfo.php?accion=carreras",
        data:parametro,
        method:"POST",
        success:function(respuesta){

          $("#slc-carreras").html(respuesta);
        },
        error:function(e){

           console.log(e);
        }

 });

});





$("#btn-iniciar-sesion-estudiante").click(function(){

  /*if ($("#txt-correo").val() == "") {
      document.getElementById('txt-correo').classList.add('input_error');
      document.getElementById('txt-password').classList.add('input_error');
      document.getElementById('div-error2').style.display = 'block';
    if ($("#txt-password").val() == "") {
      document.getElementById('txt-correo').classList.add('input_error');
      document.getElementById('txt-password').classList.add('input_error');
      document.getElementById('div-error2').style.display = 'block';
    }
  }*/  
   document.getElementById('txt-correo').classList.remove('input_error');
   document.getElementById('txt-password').classList.remove('input_error');
  document.getElementById('div-error').style.display = 'none';
  document.getElementById('div-error2').style.display = 'none';


	if ($("#txt-correo").val()) {

		if ($("#txt-password").val()) {



            /*  if ($("#txt-cuenta").val()=="20151002122") {

                    if ($("#txt-password").val()=="1234") {

                    
                    window.location = "principalMatricula.php";

                  }else{alert("contrasena no valida.")}

              }
              else
              {
                alert("usuario incorrecto")
              }*/
					 var parametros = "txt-correo="+$("#txt-correo").val()+"&"+"txt-password="+$("#txt-password").val();
          
       						$.ajax({
        					url:"ajax/gestion-usuario.php?accion=login",
       						 data: parametros,
       						 method:"POST",
        					 dataType:'json',
        					
                  success: function(respuesta){
         					if(respuesta.estatus==1)
         						{  
                      if(respuesta.estatus2==3)
                      {
                       window.location = "cuentaDesactivada.html";
                      }else{
                          if(respuesta.idTipoUsuario == 1)
                          {
                            window.location = "HomeEstudiante.php";
                          }
                          else if(respuesta.idTipoUsuario==2){
                            window.location = "HomeTutor.php";
                          }else{
                            window.location = "HomeAdministrador.php"
                          }
                      }
						         }
                    else{
                      document.getElementById('txt-correo').classList.add('input_error');
                      document.getElementById('txt-password').classList.add('input_error');
                      document.getElementById('div-error').style.display = 'block';
                      /*alert('Usuario No Encontrado!');*/
                    }
        						},
        						
                    error:function(e){
                      
         						 console.log(e);
         						 
       							 }

       							});
                    
     							 }
                   else{
                    document.getElementById('txt-correo').classList.add('input_error');
                    document.getElementById('txt-password').classList.add('input_error');
                    document.getElementById('div-error').style.display = 'block';
                   }
     			}
	else{
    document.getElementById('txt-correo').classList.add('input_error');
    document.getElementById('txt-password').classList.add('input_error');
		document.getElementById('div-error2').style.display = 'block';
	}

});


/*******Validadiones******/


function validarCorreo(etiquetaCorreo){
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(etiquetaCorreo.value))
        etiquetaCorreo.classList.remove('input_error');
    else
        etiquetaCorreo.classList.add('input_error');

}

function validarPassw(abc){
    var expresion = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,15}$/;
    if (expresion.test(abc.value)){
        abc.classList.remove('input_error');
        document.getElementById('div-error2').style.display = 'none';
    }else{
        abc.classList.add('input_error');
        document.getElementById('div-error2').style.display = 'block';
    }
}    

function validarCuenta(cuenta){
  var num = /^[0-9]{11}$/;
  if(num.test(cuenta.value)){
    cuenta.classList.remove('input_error');
    document.getElementById('div-error1').style.display = 'none';
  }
  else{
      cuenta.classList.add('input_error');
      document.getElementById('div-error1').style.display = 'block';
  }
}

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


function verClases(a){
  window.location.replace("clases.php?dep="+a);
}



$("#btn-registrarse").click(function(){

  var campos = [
        {campo:'txt-pnombre',valido:false},
        {campo:'txt-papellido',valido:false},
        {campo:'txt-cuenta',valido:false},
        {campo:'slc-centroEstudio',valido:false},
        {campo:'txt-correoelectronico',valido:false},
        {campo:'txt-password',valido:false}
    ];
    
    for (var i=0;i<campos.length;i++){
        campos[i].valido = validarCampoVacio(campos[i].campo);
    }

    for(var i=0;i<campos.length;i++){
        if (!campos[i].valido)
            return;
}


if($("#txt-pnombre").val())
{    
	if($("#txt-papellido").val()){

	  if($("#txt-cuenta").val()){

	  	if($("#slc-centroEstudio").val()){
        
        if($("#txt-correoelectronico").val()){

          if($("#txt-password").val()){

            var parametro = 
                  "slc-tipo-usuario="+$("#slc-tipo-usuario").val()+"&"+
                  "slc-preguntas="+$("#slc-preguntas").val()+"&"+
                  "txt-respuesta="+$("#txt-respuesta").val()+"&"+
                  "txt-pnombre="+$("#txt-pnombre").val()+"&"+
                  "txt-snombre="+$("#txt-snombre").val()+"&"+
                  "txt-papellido="+$("#txt-papellido").val()+"&"+
                  "txt-sapellido="+$("#txt-sapellido").val()+"&"+
              "txt-cuenta="+$("#txt-cuenta").val()+"&"+
              "txt-correoelectronico="+$("#txt-correoelectronico").val()+"&"+
              "txt-direccion="+$("#txt-direccion").val()+"&"+
                  "txt-telefono="+$("#txt-telefono").val()+"&"+
                  "txt-password="+$("#txt-password").val()+"&"+
                  "txt-fechanacimiento="+$("#txt-fechanacimiento").val()+"&"+
                  "slc-centroEstudio="+$("#slc-centroEstudio").val()+"&"+
                  "txt-ciudad="+$("#ciudad").val()+"&"+
                  "txt-departamento"+$("#departamento").val()+"&"+
                  "slc-carreras="+$("#slc-carreras").val()+"&"+
                  "accion1 = guardar";
                  //alert(parametro);
              
              $.ajax({		
              url:"ajax/gestion-registro.php?accion1=guardar",
                  data:parametro,
                  method:"POST",
                  success:function(respuesta){
                    console.log(respuesta);
                    alert("Usuario Creado! logueate");
                    window.location = "index.php";
                  },
                  error:function(e){

                    console.log(e);
                  }

              });




          }
          else{
              document.getElementById('txt-password').classList.add('input_error');
              document.getElementById('div-error').style.display = 'block';
              }
                    
                  
    }
    else{

         document.getElementById('txt-correo').classList.add('input_error');
        document.getElementById('div-error').style.display = 'block';
        }
      }
    
	  else{
        document.getElementById('txt-cuenta').classList.add('input_error');
        document.getElementById('div-error').style.display = 'block';
	   }

	  }

    else{
        document.getElementById('slc-centroEstudio').classList.add('input_error');
        document.getElementById('div-error').style.display = 'block';
        } 
    
    }
     else{
     	document.getElementById('txt-papellido').classList.add('input_error');
      document.getElementById('div-error').style.display = 'block';
     }
 }
  else{
    document.getElementById('txt-pnombre').classList.add('input_error');
    document.getElementById('div-error').style.display = 'block';
  }
});


$("#slc-departamento").click(function(){

    var parametro = "slc-departamento="+ $('#slc-departamento').val();
    $.ajax({
    url:"ajax/getInfo.php?accion=asignaturas",
        data:parametro,
        method:"POST",
        success:function(respuesta){

          $("#slc-asignatura").html(respuesta);
        },
        error:function(e){

           console.log(e);
        }

 });

});


$("#slc-asignatura").click(function(){

    var parametro = "slc-asignatura="+ $('#slc-asignatura').val();
    $.ajax({
    url:"ajax/getInfo.php?accion=seccion",
        data:parametro,
        method:"POST",
        success:function(respuesta){

          $("#slc-seccion").html(respuesta);
        },
        error:function(e){

           console.log(e);
        }

 });

});


$("#btn-agregar-asignatura").click(function(){

    var parametro = "slc-departamento="+$("#slc-departamento").val()+"&slc-asignatura="+ $('#slc-asignatura').val()+"&slc-seccion="+$("#slc-seccion").val();

    $.ajax({
    url:"ajax/gestion-matricula.php?accion=agregar",
        data:parametro,
        method:"POST",
        success:function(respuesta){

          alert(respuesta);
        },
        error:function(e){

           console.log(e);
        }

 });

});

$()



