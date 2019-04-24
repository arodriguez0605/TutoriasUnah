<?php

class Carrera
{

	private $codigoCarrera;
	private $nombreCarrera;
	private $codigoCentroEstudio;
	private $codigoFacultad;
	private $codigoDepartamento;

	public function __construct(
		$codigoCarrera,
		$nombreCarrera,
		$codigoCentroEstudio,
		$codigoFacultad,
		$codigoDepartamento
	) {
		$this->codigoCarrera = $codigoCarrera;
		$this->nombreCarrera = $nombreCarrera;
		$this->codigoCentroEstudio = $codigoCentroEstudio;
		$this->codigoFacultad = $codigoFacultad;
		$this->codigoDepartamento = $codigoDepartamento;
	}
	public function getCodigoCarrera()
	{
		return $this->codigoCarrera;
	}
	public function setCodigoCarrera($codigoCarrera)
	{
		$this->codigoCarrera = $codigoCarrera;
	}
	public function getNombreCarrera()
	{
		return $this->nombreCarrera;
	}
	public function setNombreCarrera($nombreCarrera)
	{
		$this->nombreCarrera = $nombreCarrera;
	}
	public function getCodigoCentroEstudio()
	{
		return $this->codigoCentroEstudio;
	}
	public function setCodigoCentroEstudio($codigoCentroEstudio)
	{
		$this->codigoCentroEstudio = $codigoCentroEstudio;
	}
	public function getCodigoFacultad()
	{
		return $this->codigoFacultad;
	}
	public function setCodigoFacultad($codigoFacultad)
	{
		$this->codigoFacultad = $codigoFacultad;
	}
	public function getCodigoDepartamento()
	{
		return $this->codigoDepartamento;
	}
	public function setCodigoDepartamento($codigoDepartamento)
	{
		$this->codigoDepartamento = $codigoDepartamento;
	}
	public function __toString()
	{
		return "CodigoCarrera: " . $this->codigoCarrera .
			" NombreCarrera: " . $this->nombreCarrera .
			" CodigoCentroEstudio: " . $this->codigoCentroEstudio .
			" CodigoFacultad: " . $this->codigoFacultad .
			" CodigoDepartamento: " . $this->codigoDepartamento;
	}

	static public function obtenerCarreras($conexion, $centroEstudio)
	{

		$resultado = $conexion->ejecutarConsulta("SELECT c.idCarrera, c.NombreCarrera
		  FROM carreraxcentro cxc
		  INNER JOIN centrodeestudio ce ON ce.idCentrodeEstudio = cxc.idCEcarrera
		  INNER JOIN carrera c ON c.idCarrera = cxc.idCarrera
		  WHERE ce.idCentrodeEstudio =" . $centroEstudio);
		while (($fila = $conexion->obtenerFila($resultado))) {

			echo '<option value=' . $fila['idCarrera'] . '>' . $fila['NombreCarrera'] . ' </option>';
		}
	}
}
