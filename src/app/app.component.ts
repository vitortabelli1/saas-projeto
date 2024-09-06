import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';  
import { MainComponent } from './main/main.component';
import { Main2Component } from "./main-2/main-2.component";
import { Main3Component } from './main-3/main-3.component';
import { Main4Component } from './main-4/main-4.component';
import { Main5Component } from './main-5/main-5.component';
import { CardComponent } from './card/card.component';
import { Main6Component } from './main-6/main-6.component';
import { ListComponent } from './list/list.component';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,  // Marcar o AppComponent como standalone
  imports: [HeaderComponent, MainComponent, Main2Component, Main3Component, Main4Component,
    Main5Component, CardComponent, Main6Component, ListComponent] // Importar o HeaderComponent
})
export class AppComponent {
  title = 'saas-projeto';
}
