import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class Home {
  trendingMusic = [
    { title: 'House Grooves', genres: 'House, Pop', image: 'assets/house.jpg' },
    { title: 'Bedroom Beats', genres: 'Pop, Rap', image: 'assets/bedroom.jpg' },
    { title: 'Haze Etnica', genres: 'Experimental', image: 'assets/haze.jpg' },
    { title: 'Synthetic Beats', genres: 'Drill, Trap', image: 'assets/synthetic.jpg' },
    { title: 'Night Pop', genres: 'Pop', image: 'assets/night.jpg' },
  ];
}

