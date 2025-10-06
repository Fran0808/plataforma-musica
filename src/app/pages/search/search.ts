import { Component } from '@angular/core';
import { Music } from '../../services/music';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-search',
  //Importando FormsModule porque es standalone. 
  //CommonModule se usa para utilizar las nuevas funciones de angular como @if o @For en html
  imports: [FormsModule, CommonModule], 
  templateUrl: './search.html',  
  styleUrl: './search.css',
  standalone: true
})
export class Search {  
  //Variables declaradas para el componente de busqueda
  
  query = '';
  results: any[] = [];
  loading = false;
  error = '';

  constructor(private music: Music) {}
  //Funcion para buscar musica
  
  buscar() {
    if (!this.query.trim()) {
      this.error = 'Escribe algo';
      return;
    }
    this.loading = true;
    this.error = '';
    this.results = [];

    this.music.searchTracks(this.query).subscribe({
      next: (data: any) => {
        this.loading = false;
        if (!data.data.length) {
          this.error = 'No se encontraron resultados';
          return;
        }
        this.results = data.data;
      },
      error: (err) => {
        this.loading = false;
        this.error = 'Error: ' + err.message;
      }
    });
  }
}
