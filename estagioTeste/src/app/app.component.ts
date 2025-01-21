import { Component } from '@angular/core'; // importa o componente

@Component({ // define o componente
  selector: 'app-root', // nome do componente
  templateUrl: './app.component.html', // define o arquivo html
  styleUrls: ['./app.component.css'] // define o arquivo css
})
export class AppComponent { // exporta a classe
  title = 'Minha Aplicação'; // define o título da aplicação
}
