import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PlayerService {
  private playlist: any[] = [];
  private currentIndex = -1;

  private currentSongSubject = new BehaviorSubject<any | null>(null);
  currentSong$ = this.currentSongSubject.asObservable();

  isLoop = false;
  isShuffle = false;

  setPlaylist(songs: any[], startIndex: number = 0) {
    this.playlist = songs;
    this.currentIndex = startIndex;
    this.setSong(this.playlist[this.currentIndex]);
  }

  setSong(song: any) {
    this.currentSongSubject.next(song);
  }

  next() {
    if (this.isShuffle) {
      this.currentIndex = Math.floor(Math.random() * this.playlist.length);
    } else if (this.currentIndex < this.playlist.length - 1) {
      this.currentIndex++;
    } else if (this.isLoop) {
      this.currentIndex = 0; // volver al inicio
    } else {
      return; // fin de la lista
    }
    this.setSong(this.playlist[this.currentIndex]);
  }

  prev() {
    if (this.isShuffle) {
      this.currentIndex = Math.floor(Math.random() * this.playlist.length);
    } else if (this.currentIndex > 0) {
      this.currentIndex--;
    } else if (this.isLoop) {
      this.currentIndex = this.playlist.length - 1; // ir al final
    } else {
      return;
    }
    this.setSong(this.playlist[this.currentIndex]);
  }

  toggleLoop() {
    this.isLoop = !this.isLoop;
  }

  toggleShuffle() {
    this.isShuffle = !this.isShuffle;
  }
}