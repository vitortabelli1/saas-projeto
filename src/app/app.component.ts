import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';  
import { MainComponent } from './main/main.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,  // Marcar o AppComponent como standalone
  imports: [HeaderComponent,MainComponent],  // Importar o HeaderComponent
})
export class AppComponent {
  title = 'saas-projeto';
}
