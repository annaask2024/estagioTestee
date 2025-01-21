import { Routes } from '@angular/router'; // Importa a interface de rotas
import { LoginComponent } from './login/login.component'; // Importa o componente de login
import { AppComponent } from './app.component'; // Importa o componente de aplicação

export const appRoutes: Routes = [ // Exporta as rotas da aplicação
  { path: '', component: AppComponent }, // Rota para a aplicação
  { path: 'login', component: LoginComponent }, // Rota para o componente de login

];
