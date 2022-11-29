import { Component, OnInit } from '@angular/core';
import { Juego } from 'src/app/model/juego';
import { JuegoService } from 'src/app/services/juego.service';

@Component({
  selector: 'app-juego',
  templateUrl: './juego.component.html',
  styleUrls: ['./juego.component.css']
})
export class JuegoComponent implements OnInit{

  juegos: Juego[] = [];


  constructor(private juegoservicio: JuegoService) {}

  ngOnInit(): void{
    this.cargarJuegos();
  }

  cargarJuegos(): void {
    this.juegoservicio.list() .subscribe(data => {this.juegos = data; })

  }

  borrar(id?: number) {
    alert("¿Estas seguro de eliminar el Juego seleccionado?");
    if(id != undefined){
      this.juegoservicio.delete(id).subscribe({
        next: data => {
          alert ("Juego elimindo exitosamente.")
          this.cargarJuegos();
        }, error: err => {
          alert("No se puede eliminar el juego.")
        }
    })
    }
    }
  }

