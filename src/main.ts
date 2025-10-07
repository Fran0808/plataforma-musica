import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app';
import { provideHttpClient, withJsonpSupport } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';

bootstrapApplication(App, {
  //Debe ir withJsonpSupport() para que se habilite el soporte para JSONP en el sistema HTTP para angular standalone
  providers: [
    provideHttpClient(withJsonpSupport()), 
    provideRouter(routes),    
  ]
});
