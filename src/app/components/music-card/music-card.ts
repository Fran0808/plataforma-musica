import { Component, Input } from '@angular/core';

@Component({
  selector: 'music-card',
  standalone: true,
  templateUrl:'./music-card.html',
  styleUrls: ['./music-card.css']
})
export class MusicCardComponent {
  @Input() title!: string;
  @Input() genres!: string;
  @Input() image!: string;
}
