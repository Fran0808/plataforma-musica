import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { AudioPlayer } from "./components/audio-player/audio-player";

@Component({
  selector: 'app-root',
  //Importando los componentes
  imports: [RouterOutlet, Header, Footer, AudioPlayer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('plataforma-musica');
}
