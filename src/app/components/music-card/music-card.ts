import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Favoritos } from '../../services/favoritos';
import { PlayerService } from '../../services/barra.reproductor';

@Component({
  selector: 'music-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './music-card.html',
  styleUrls: ['./music-card.css'],
})

export class MusicCardComponent {
  //Los inputs son para recibir datos del componente padre
  @Input() resultados: any[] = [];
  @Input() cargando: boolean = false;
  @Input() error: string = '';
  @Input() buscado: boolean = false;

  @Input() mode: 'search' | 'playlist' = 'search';
  
  constructor(private favoritos: Favoritos, private player: PlayerService) {}

  addToFavorites(song: any) {
    this.favoritos.addFavorite(song);
  }

  removeFromFavorites(song: any) {
    this.favoritos.removeFavorite(song);
  }

  playSong(song: any, index: number) {
    this.player.setPlaylist(this.resultados, index);
  }
}
