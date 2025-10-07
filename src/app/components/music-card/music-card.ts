import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'music-card',
  standalone: true,
  templateUrl:'./music-card.html',
  styleUrls: ['./music-card.css']
})
export class MusicCardComponent {
  //Los inputs son para recibir datos del componente padre
  @Input() resultados: any[] = [];
  @Input() cargando: boolean = false;
  @Input() error: string = '';
  @Input() buscado: boolean = false;
}
