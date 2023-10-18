export class Repartidor {
  dni?: number;
  nombre?: string;
  edad?: number;
  capacidadDeTransporte?: number;
  paisDeOrigen?: string;
  unidadPropia?: boolean;

  constructor(
    dni?: number,
    nombre?: string,
    edad?: number,
    capacidadDeTransporte?: number,
    paisDeOrigen?: string,
    unidadPropia?: boolean
  ) {
    this.dni = dni;
    this.nombre = nombre;
    this.edad = edad;
    this.capacidadDeTransporte = capacidadDeTransporte;
    this.paisDeOrigen = paisDeOrigen;
    this.unidadPropia = unidadPropia;
  }
}
