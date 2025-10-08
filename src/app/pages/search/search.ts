import { Component } from '@angular/core';
import { Music } from '../../services/music';
import { FormsModule } from '@angular/forms';
import { MusicCardComponent } from '../../components/music-card/music-card';


@Component({
  selector: 'app-search',
  //Importando FormsModule porque es standalone. 
  //CommonModule se usa para utilizar las nuevas funciones de angular como @if o @For en html
  imports: [FormsModule, MusicCardComponent], 
  templateUrl: './search.html',  
  styleUrl: './search.css',
  standalone: true
})
export class Search {  
  //Variables declaradas para el componente de busqueda
  
  query = '';
  resultados: any[] = [];
  cargando = false;
  error = '';

  constructor(private music: Music) {}
  //Funcion para buscar musica
  //Se crea la variable buscado para saber si se ha buscado algo y mostrar el componente de busqueda
  
  buscado: Boolean = false;
  buscar() {
    if (!this.query.trim()) {
      this.error = 'Escribe algo';
      return;
    }
    this.cargando = true;
    this.error = '';
    this.resultados = [];
    this.buscado = true;

    this.music.buscarPistas(this.query).subscribe({
      next: (data: any) => {
        this.cargando = false;
        if (!data.data.length) {
          this.error = 'No se encontraron resultados';
          return;
        }
        this.resultados = data.data;
      },
      error: (err) => {
        this.cargando = false;
        this.error = 'Error: ' + err.message;
      }
    });
  }
}
