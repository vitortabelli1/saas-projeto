import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';  
import { MainComponent } from './main/main.component';
import { Main2Component } from "./main-2/main-2.component";
import { Main3Component } from './main-3/main-3.component';
import { Main4Component } from './main-4/main-4.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,  // Marcar o AppComponent como standalone
  imports: [HeaderComponent, MainComponent, Main2Component, Main3Component, Main4Component] // Importar o HeaderComponent
})
export class AppComponent {
  title = 'saas-projeto';
}
