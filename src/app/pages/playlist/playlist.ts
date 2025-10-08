import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Favoritos } from '../../services/favoritos';
import { MusicCardComponent } from '../../components/music-card/music-card';

@Component({
  selector: 'app-playlist',
  standalone: true,
  imports: [CommonModule, MusicCardComponent],
  templateUrl: './playlist.html',
  styleUrls: ['./playlist.css'],
})
export class Playlist implements OnInit {
  favorites: any[] = [];

  constructor(private favoritos: Favoritos) {}

  ngOnInit() {
    this.favoritos.favorites$.subscribe((data) => {
      this.favorites = data;
    });
  }

  remove(song: any) {
    this.favoritos.removeFavorite(song);
  }
}
