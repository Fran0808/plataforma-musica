import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'music-card',
  standalone: true,
  templateUrl: './music-card.html',
  styleUrls: ['./music-card.css']
})
export class MusicCardComponent {
  //Los inputs son para recibir datos del componente padre
  @Input() results: any[] = [];
  @Input() loading: boolean = false;
  @Input() error: string = '';
  @Input() genres!: string;
  @Input() image!: string;
  @Input() buscado: boolean = false;
}
