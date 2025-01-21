import { NgModule } from '@angular/core'; // importa o módulo do angular
import { BrowserModule } from '@angular/platform-browser'; // importa o módulo do navegador
import { ReactiveFormsModule } from '@angular/forms'; // importa o módulo de reativo forms
import { RouterModule } from '@angular/router'; // importa o módulo de rotas

import { AppComponent } from './app.component'; // importa o componente principal
import { LoginComponent } from './login/login.component'; // importa o componente de login

@NgModule({ // declara o módulo
  declarations: [
    AppComponent,
    LoginComponent 
  ],
  imports: [ // importa os módulos necessários
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      
      { path: '', component: AppComponent }, // rota principal
      { path: 'login', component: LoginComponent }, // rota de login
      
    ])
  ],
  providers: [], // declara os provedores
  bootstrap: [AppComponent]  // declara o componente principal
})
export class AppConfig { } 
