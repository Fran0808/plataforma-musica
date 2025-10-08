import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class Favoritos {
  private favorites: any[] = [];
  private favoritesSubject = new BehaviorSubject<any[]>(this.favorites);
  favorites$ = this.favoritesSubject.asObservable();

  addFavorite(song: any) {
    if (!this.favorites.find(s => s.id === song.id)) {
      this.favorites.push(song);
      this.favoritesSubject.next([...this.favorites]);
    }
  }

  removeFavorite(song: any) {
    this.favorites = this.favorites.filter(s => s.id !== song.id);
    this.favoritesSubject.next([...this.favorites]);
  }
  
}


