export class Juego {
  id?: number;
  nombre: string;
  plataformaConsola: string;
  empresa: string;
  anio: number;
  mundoAbierto: boolean;

  constructor(nombre: string , plataformaConsola: string , empresa: string ,
    anio: number , mundoAbierto: boolean ) {
      this.nombre = nombre;
      this.plataformaConsola = plataformaConsola;
      this.empresa = empresa;
      this.anio = anio;
      this.mundoAbierto = mundoAbierto;

    }

}
