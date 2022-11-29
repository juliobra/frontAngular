import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Juego } from './model/juego';
import { JuegoService } from './services/juego.service';

@Component({
  selector: 'app-add-juego',
  templateUrl: './add-juego.component.html',
  styleUrls: ['./add-juego.component.css']
})
export class AddJuegoComponent implements OnInit {
  nombre: string= "";
  plataformaConsola: string = "";
  empresa: string = "";
  anio!: number;
  mundoAbierto!: boolean;



  constructor (private juegoserv: JuegoService, private router: Router) {


  }

  ngOnInit(): void {

  }

  onCreate(): void {
    const juego= new Juego(this.nombre, this.plataformaConsola, this.empresa,
                               this.anio, this.mundoAbierto);
      this.juegoserv.save(juego).subscribe({
        next: data =>{
          alert("Juego Agregado Correctamente");
          this.router.navigate(['']);
        },error: err => {
         alert("No se pudo agreagr el juego");
          this.router.navigate(['']);
        }
      })
  }
}
