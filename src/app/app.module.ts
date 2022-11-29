import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JuegoComponent } from './components/juego/juego.component';
import { AddJuegoComponent } from './add-juego.component';
import { FormsModule } from '@angular/forms';
import { EditJuegoComponent } from './edit-juego.component';

@NgModule({
  declarations: [
    AppComponent,
    JuegoComponent,
    AddJuegoComponent,
    EditJuegoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
