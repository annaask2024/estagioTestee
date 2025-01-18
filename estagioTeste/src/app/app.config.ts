import { ApplicationConfig } from '@angular/core';
import { provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms'; // Certifique-se de importar o ReactiveFormsModule
import { LoginComponent } from './login/login.component'; // Importe o componente de login
import { routes } from './app.routes'; // Suas rotas personalizadas

// Configuração da aplicação
export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), // Gerenciar mudanças de detecção
    provideRouter(routes) // Definir as rotas da aplicação
  ]
};
