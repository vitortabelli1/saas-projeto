import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CardComponent } from './card.component';  // Certifique-se de ajustar o caminho conforme a localização do seu CardComponent
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent  // Declare o CardComponent aqui
  ],
  imports: [
    BrowserModule,
    MatCardModule  // Adicione MatCardModule aos imports
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
