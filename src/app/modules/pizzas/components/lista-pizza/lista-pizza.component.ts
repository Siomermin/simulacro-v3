import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Pizza } from '../../models/pizza';

@Component({
  selector: 'app-lista-pizza',
  templateUrl: './lista-pizza.component.html',
  styleUrls: ['./lista-pizza.component.scss']
})
export class ListaPizzaComponent {
  @Input() list!: Pizza[]; // Define the input property
  @Output() seleccionar: EventEmitter<Pizza> = new EventEmitter<Pizza>();

  seleccionar_click(item: Pizza) {
    this.seleccionar.emit(item);
  }
}
