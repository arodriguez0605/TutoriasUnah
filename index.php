<!DOCTYPE html>
<html lang="en">

<head>
	<!-- Titulo de la pagina -->
	<title>Login | tutorias</title>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">

	<!-- Hojas de estilo CSS importadas -->
	<link rel="icon" type="image/png" href="images/icons/favicon.ico" />
	<link rel="stylesheet" type="text/css" href="vendor/bootstrap/css/bootstrap.min.css">
	<link rel="stylesheet" type="text/css" href="fonts/font-awesome-4.7.0/css/font-awesome.min.css">
	<link rel="stylesheet" type="text/css" href="vendor/animate/animate.css">
	<link rel="stylesheet" type="text/css" href="vendor/css-hamburgers/hamburgers.min.css">
	<link rel="stylesheet" type="text/css" href="vendor/select2/select2.min.css">
	<link rel="stylesheet" type="text/css" href="css/util.css">
	<link rel="stylesheet" type="text/css" href="css/main.css">
	<link rel="stylesheet" type="text/css" href="css/custom.css">
</head>

<body>

	<div class="limiter">
		<div class="container-login100">
			<div class="wrap-login100">
				<div class="login100-pic js-tilt" data-tilt>
					<img src="img/imgunah/logo2.png" alt="IMG">
				</div>

				<div class="login100-form validate-form">
					<span class="login100-form-title">
						Tutorías UNAH
					</span>

					<div class="wrap-input100 validate-input" data-validate="Ingrese un correo válido: ex@abc.xyz">
						<input class="input100" type="email" name="email" id="txt-correo" placeholder="Correo" onkeyup="validarCorreo(this)">
						<span class="focus-input100"></span>
						<span class="symbol-input100">
							<i class="fa fa-envelope" aria-hidden="true"></i>
						</span>
					</div>

					<div class="wrap-input100 validate-input" data-validate="La contraseña es requerida">
						<input class="input100" type="password" id="txt-password" name="pass" placeholder="Contraseña">
						<span class="focus-input100"></span>
						<span class="symbol-input100">
							<i class="fa fa-lock" aria-hidden="true"></i>
						</span>
					</div>
					<div id="div-error" class="mensaje-error">Correo o Contraseña invalido, pruebe de nuevo</div>
					<div id="div-error2" class="mensaje-error">Error, ingrese datos para procesar</div>
					<div class="container-login100-form-btn">
						<button type="submit" class="login100-form-btn" id="btn-iniciar-sesion-estudiante">
							Ingresar
						</button>
					</div>

					<div class="text-center p-t-12">
						<span class="txt1">
							Olvidaste tu
						</span>
						<a class="txt2" href="#" data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo">
							Correo / Contraseña
						</a>
					</div>

					<div class="text-center ">
						<a class="txt2" href="registro.html">
							Crea tu cuenta
							<i class="fa fa-long-arrow-right m-l-5" aria-hidden="true"></i>
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>

	<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
		<div class="modal-dialog" role="document">
			<div class="modal-content">
				<div class="modal-header">
					<h5 class="modal-title" id="exampleModalLabel">Recuperar Cuenta</h5>
					<button type="button" class="close" data-dismiss="modal" aria-label="Close">
						<span aria-hidden="true">&times;</span>
					</button>
				</div>
				<div class="modal-body">
					<div class="form-group">
						<label for="recipient-name" class="col-form-label">Correo de su cuenta:</label>
						<input type="text" class="form-control" id="recipient-correo">
						<div id="div-pregunta" style="display:none">
							<label>Primero Responde la siguiente pregunta:</label>
							<label class="form-control" id="label-pregunta"></label>
							<input type="text" id="txt-respuesta2" class="form-control">
							<button id="btn-verificar-respuesta" class="btn btn-primary">Enviar Respuesta</button>
						</div>
					</div>
				</div>
				<div class="modal-footer">
					<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
					<button type="button" class="btn btn-primary" id="btn-verificar-correo">Verificar</button>
				</div>
			</div>
		</div>
	</div>

	<!-- javascripts importados -->
	<script src="vendor/jquery/jquery-3.2.1.min.js"></script>
	<script src="vendor/bootstrap/js/popper.js"></script>
	<script src="vendor/bootstrap/js/bootstrap.min.js"></script>
	<script src="vendor/select2/select2.min.js"></script>
	<script src="vendor/tilt/tilt.jquery.min.js"></script>
	<script>
		$('.js-tilt').tilt({
			scale: 1.1
		})
	</script>
	<script src="js/main.js"></script>
	<script src="js/jmfunciones.js"></script>
</body>

</html>