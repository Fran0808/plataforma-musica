import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Music } from '../../services/music';
import { MusicCardComponent } from '../../components/music-card/music-card';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, MusicCardComponent],
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
})
export class HomeComponent {
  constructor(private music: Music) {}

  buscado: Boolean = false;
  resultados: any[] = [];
  cargando = false;
  error = '';

  ngOnInit() {
    this.buscar(); 
  }
  
  buscar() {
    this.cargando = true;
    this.error = '';
    this.resultados = [];
    this.buscado = true;

    this.music.buscarPistas('musica').subscribe({
      next: (data: any) => {
        this.cargando = false;

        if (!data.data.length) {
          this.error = 'No se encontraron resultados';
          return;
        }

        // Limitar a los primeros 4 resultados
        this.resultados = data.data.slice(0, 4);
      },
      error: (err) => {
        this.cargando = false;
        this.error = 'Error: ' + err.message;
      },
    });
  }
}
