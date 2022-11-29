import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VirtualTimeScheduler } from 'rxjs';
import { Juego } from './model/juego';
import { JuegoService } from './services/juego.service';


@Component({
  selector: 'app-edit-juego',
  templateUrl: './edit-juego.component.html',
  styleUrls: ['./edit-juego.component.css']
})
export class EditJuegoComponent implements OnInit {

  juego: Juego = null;

  constructor (private juegoservice: JuegoService, private router: Router, private activatedRoute: ActivatedRoute ){
  }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.juegoservice.detail(id).subscribe({
      next: data => {
        alert("¿Esta seguro que desea editar el juego?");
        this.juego = data;
      },error: err=>{
        ("Error al seleccionar el juego");
      this.router.navigate(['']);
    }
    }
    )
  }

  onUpdate(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.juegoservice.update(id, this.juego).subscribe({
      next: data => {
        alert("Juego modificado correctamente");
        this.router.navigate(['']);
      },error: err => {
        alert("Error al modificar el juego");
        this.router.navigate(['']);
      }
    })
  }


}
