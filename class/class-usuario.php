<?php
class Usuario
{

	private $codigoUsuario;
	private $contrasena;
	private $codigoRol;

	public function __construct(
		$codigoUsuario,
		$contrasena,
		$codigoRol
	) {
		$this->codigoUsuario = $codigoUsuario;
		$this->contrasena = $contrasena;
		$this->codigoRol = $codigoRol;
	}
	public function getCodigoUsuario()
	{
		return $this->codigoUsuario;
	}
	public function setCodigoUsuario($codigoUsuario)
	{
		$this->codigoUsuario = $codigoUsuario;
	}
	public function getContrasena()
	{
		return $this->contrasena;
	}
	public function setContrasena($contrasena)
	{
		$this->contrasena = $contrasena;
	}
	public function getCodigoRol()
	{
		return $this->codigoRol;
	}
	public function setCodigoRol($codigoRol)
	{
		$this->codigoRol = $codigoRol;
	}
	public function __toString()
	{
		return "CodigoUsuario: " . $this->codigoUsuario .
			" Contrasena: " . $this->contrasena .
			" CodigoRol: " . $this->codigoRol;
	}

	public static function verificarUsuario($conexion, $cuenta, $contra)
	{
		$sql = sprintf(
			"SELECT * from usuario u
  		 	inner join Estudiante e on u.CODIGOUSUARIO = e.CODIGOUSUARIO
            inner join Persona p on e.codigoPersona = p.codigoPersona
            inner join CentroEstudio ce on ce.codigoCentroEstudio = e.codigoCentroEstudio
            inner join ESTUDIANTEXPLANESTUDIO exp on e.CODIGOESTUDIANTE = exp.CODIGOESTUDIANTE
            inner join PlanEStudios pe on exp.CODIGOPLANESTUDIO=pe.CODIGOPLANESTUDIO
            inner join CARRERA ca on pe.CODIGOCARRERA = ca.CODIGOCARRERA
            inner join Historial h on e.codigoEstudiante = h.codigoEstudiante
            where e.NUMEROCUENTA=" . $cuenta . " and u.CONTRASENA='" . $contra . "'"


		);
		$resultado = $conexion->ejecutarConsulta($sql);
		$numrows = oci_fetch_all($resultado, $res);
		$respuesta = array();

		if ($numrows == 1) {
			$resultado = $conexion->ejecutarConsulta($sql);
			$fila = $conexion->obtenerFila($resultado);
			$respuesta["estatus"] = 1;
			$_SESSION["NUMEROCUENTA"] = $fila["NUMEROCUENTA"];
			$_SESSION["PNOMBRE"] = $fila["PNOMBRE"];
			$_SESSION["PAPELLIDO"] = $fila["PAPELLIDO"];
			$_SESSION["NOMBRECENTRO"] = $fila["NOMBRECENTRO"];
			$_SESSION["NOMBRECARRERA"] = $fila["NOMBRECARRERA"];
			$_SESSION["CODIGOROL"] = $fila["CODIGOROL"];
			$_SESSION["CODIGOHISTORIAL"] = $fila["CODIGOHISTORIAL"];
			$_SESSION["CODESTUDIANTE"] = $fila["CODIGOESTUDIANTE"];
		} else {
			$respuesta["estatus"] = 0;
		}

		echo json_encode($respuesta);
	}
}
