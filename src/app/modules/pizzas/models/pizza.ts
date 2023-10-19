export class Pizza {
  public nombre: string;
  public ingredientes: string;
  public precio: number;
  public peso: number;

  constructor(
    nombre: string,
    ingredientes: string,
    precio: number,
    peso: number
  ) {
    this.nombre = nombre;
    this.ingredientes = ingredientes;
    this.precio = precio;
    this.peso = peso;
  }
}
