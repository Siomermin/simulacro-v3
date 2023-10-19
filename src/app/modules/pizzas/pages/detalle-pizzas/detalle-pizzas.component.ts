import { Component, Input } from '@angular/core';
import { Pizza } from '../../models/pizza';
import { PizzaService } from '../../services/pizza.service';

@Component({
  selector: 'app-detalle-pizzas',
  templateUrl: './detalle-pizzas.component.html',
  styleUrls: ['./detalle-pizzas.component.scss']
})
export class DetallePizzasComponent {
  pizza?: Pizza;
  @Input() list!: Pizza[]; // Define the input property

  constructor(private pizzaService: PizzaService) { }

  ngOnInit() {
    this.obtenerPizzas();
  }

  seleccionar(item: Pizza) {
    this.pizza = item;
  }

  obtenerPizzas() {
    this.pizzaService.getPizzasAsync()
    .then(res => {
      this.list = res;
    })
    // .catch(() => this.toasts.mostrar('¡Error al buscar las pizzas listas!'));
  }

  alta(item: Pizza) {
    this.pizzaService.altaPizzaAsync(item)
    .then(() => this.obtenerPizzas())
    // .catch(() => this.toasts.mostrar('¡Error al crear la pizza!'));
  }

  modificar() {
    if (this.pizza) {
      this.pizzaService.modificarPizzaAsync(this.pizza)
      .then(() => this.obtenerPizzas())
      // .catch(() => this.toasts.mostrar('¡Error al modificar la pizza!'));
    } else {
      // this.toasts.mostrar('¡No se ha seleccionado ninguna pizza!');
    }
  }

  borrar() {
    if (this.pizza) {
      this.pizzaService.bajaPizzaAsync(this.pizza)
      .then(() => {
        this.obtenerPizzas();
        this.pizza = undefined;
      })
      // .catch(() => this.toasts.mostrar('¡Error al borrar la pizza!'));
    } else {
      // this.toasts.mostrar('¡No se ha seleccionado ninguna pizza!');
    }
  }
}
