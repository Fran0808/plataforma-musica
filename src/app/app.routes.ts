import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Search } from './pages/search/search';
import { Playlist } from './pages/playlist/playlist';

//Creando las rutas que se van a llamar
export const routes: Routes = [
    {path: '', component: Home},
    {path: 'buscar', component: Search},
    {path: 'playlist', component: Playlist}
];
