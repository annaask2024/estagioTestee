import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppConfig } from './app/app.config';  // Importe o AppConfig
import { appRoutes } from './app/app.routes';  // Importe suas rotas

platformBrowserDynamic()
  .bootstrapModule(AppConfig)  // Inicie o AppConfig
  .catch(err => console.error(err));
