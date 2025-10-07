import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class HomeComponent {
  mostrarBuscador = false;
  terminoBusqueda = '';
  resultados: string[] = [];

  // 👇 Aquí agregamos la lista de música
  trendingMusic = [
  {
    title: 'Idilio',
    genres: 'Salsa',
    image: 'https://i.scdn.co/image/ab67616d00001e02f34aa7a642e0af5f0888e790', 
    artista: 'Willie colon'
  },
  {
    title: 'Cariñito',
    genres: 'Cumbia Peruana',
    image: 'https://scontent.flim38-1.fna.fbcdn.net/v/t1.6435-9/133753916_3178734118894242_6329602258609695974_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFERKDEmdvni6SbtEKtWmBbeZYqbsZjlVB5lipuxmOVUKh-LALPMXh8NSrWOCj8QAZJJ3uI2VzrKpnibkKCqShw&_nc_ohc=LrYm0UvlLN4Q7kNvwE1IdHR&_nc_oc=AdmL-0Qxw3zV7k6sAAz54c_CUi5bEuyGYqi7sG2bnmx_qVy_KCkzjqxqucK1D4zuDyQ&_nc_zt=23&_nc_ht=scontent.flim38-1.fna&_nc_gid=_9ZWEIcFXzva_9lXnUFT9A&oh=00_Afc99yamvoEtE2QjhL5VmiqYV7UHi-SuooHdcKdzUdYM_g&oe=690BD3AE', 
    artista: 'Grupo 5'
  },
  {
    title: 'Gasolina',
    genres: 'Reguetón',
    image: 'https://i.pinimg.com/736x/01/25/9d/01259d765e6f48e65be55d44f92b393b.jpg', // Ej: Karol G, Shakira, etc.
    artista: 'Daddy Yankee'
  },
  {
    title: 'Cuentame',
    genres: 'Pop',
    image: 'https://i.ytimg.com/vi/5OfxhN8sIs4/maxresdefault.jpg', // Ej: Romeo Santos, Aventura
    artista: 'Aventura'
  },
  {
    title: 'Cuando pase el temblor',
    genres: 'Rock Latino',
    image: 'https://i.discogs.com/dn18zFgco98NzMx1lVCZ62DSISb8_w0mN3ldAAtvj_c/rs:fit/g:sm/q:90/h:599/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTUxNjkx/MTAtMTQ2MDc5OTk3/Mi0yOTg1LmpwZWc.jpeg', // Ej: Soda Stereo o un grupo similar
    artista: 'Soda Estereo'
  }
];

  abrirBuscador() {
    this.mostrarBuscador = true;
  }

  cerrarBuscador(event?: MouseEvent) {
    if (event && (event.target as HTMLElement).classList.contains('search-modal')) {
      this.mostrarBuscador = false;
    } else if (!event) {
      this.mostrarBuscador = false;
    }
  }

  buscarMusica() {
    const termino = this.terminoBusqueda.trim().toLowerCase();
    if (!termino) {
      this.resultados = [];
      return;
    }

    this.resultados = this.trendingMusic
      .filter(m => 
        m.title.toLowerCase().includes(termino) || 
        m.genres.toLowerCase().includes(termino)
      )
      .map(m => m.title);
  }
}
  