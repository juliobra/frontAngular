import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Juego } from '../model/juego';

@Injectable({
  providedIn: 'root'
})
export class JuegoService {

URL = "http://localhost:8080/api/"

  constructor(private httpClient: HttpClient) { }

  //create

  public save(juego: Juego): Observable<any>{
    return this.httpClient.post<any>(this.URL + 'crear', juego);

  }

  //read
  public list(): Observable<Juego[]>{
    return this.httpClient.get<Juego[]>(this.URL + 'vertodos');
  }

  public detail(id: number): Observable<Juego> {
    return this.httpClient.get<Juego>(this.URL + `ver/${id}`);
  }


  //delete

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.URL + `borrar/${id}`);
  }

  //update

  public update(id: number, juego: Juego ): Observable<any>{
    return this.httpClient.put<any>(this.URL + `editar/${id}`, juego);
  }

}
