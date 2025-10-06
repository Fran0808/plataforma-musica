import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

//Decorador que sirve para indicar que la clase es un servicio y puede ser inyectado en otros componentes
@Injectable({
  providedIn: 'root'
})
//Logica para el llamado del servicio de busqueda de musica
export class Music {
  constructor(private http: HttpClient) {}

  searchTracks(query: string): Observable<any> {
    const url = `https://api.deezer.com/search?q=${encodeURIComponent(query)}&output=jsonp`;
    return this.http.jsonp(url, 'callback');
  }
}
