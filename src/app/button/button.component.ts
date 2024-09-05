import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  @Input() text: string = 'Button'; // Texto do botão
  @Input() type: 'button' | 'submit' = 'button'; // Tipo do botão
  @Output() clickEvent = new EventEmitter<void>(); // Evento de clique

  onClick(): void {
    this.clickEvent.emit(); // Emite o evento de clique
  }
}
