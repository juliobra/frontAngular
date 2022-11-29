import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddJuegoComponent } from './add-juego.component';
import { JuegoComponent } from './components/juego/juego.component';
import { EditJuegoComponent } from './edit-juego.component';

const routes: Routes = [
  {path: "", component: JuegoComponent },
  {path: "nuevo", component: AddJuegoComponent },
  {path: "editar/:id", component: EditJuegoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
