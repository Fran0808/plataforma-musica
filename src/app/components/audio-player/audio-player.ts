import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerService } from '../../services/barra.reproductor';

@Component({
  selector: 'app-audio-player',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './audio-player.html',
  styleUrls: ['./audio-player.css']
})
export class AudioPlayer implements OnInit {
  song: any = null;
  audio = new Audio();
  isPlaying = false;
  currentTime = 0;
  duration = 0;

  constructor(public player: PlayerService) {}

  ngOnInit() {
    // Escuchar cambios de canción
    this.player.currentSong$.subscribe(song => {
      if (song) {
        this.song = song;
        this.playNewSong();
      }
    });

    // Actualizar progreso
    this.audio.addEventListener('timeupdate', () => {
      this.currentTime = this.audio.currentTime;
      this.duration = this.audio.duration || 0;
    });

    // Cuando termina la canción, pasar a la siguiente
    this.audio.addEventListener('ended', () => {
      this.nextSong();
    });
  }


  playNewSong() {
    this.audio.src = this.song.preview;
    this.audio.play();
    this.isPlaying = true;
  }

  playPause() {
    if (this.isPlaying) {
      this.audio.pause();
    } else {
      this.audio.play();
    }
    this.isPlaying = !this.isPlaying;
  }

  seek(event: any) {
    const value = event.target.value;
    this.audio.currentTime = value;
  }

  formatTime(seconds: number): string {
    if (!seconds) return '0:00';
    const m = Math.floor(seconds / 60);
    const s = Math.floor(seconds % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
  }

  nextSong() {
    this.player.next();
  }

  prevSong() {
    this.player.prev();
  }

  toggleLoop() {
    this.player.toggleLoop();
  }

  toggleShuffle() {
    this.player.toggleShuffle();
  }
}
