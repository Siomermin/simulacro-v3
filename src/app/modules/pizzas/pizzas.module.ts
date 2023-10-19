import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { PizzasRoutingModule } from './pizzas-routing.module';
import { DetallePizzasComponent } from './pages/detalle-pizzas/detalle-pizzas.component';
import { AltaPizzaComponent } from './components/alta-pizza/alta-pizza.component';
import { ModificarPizzaComponent } from './components/modificar-pizza/modificar-pizza.component';
import { BorrarPizzaComponent } from './components/borrar-pizza/borrar-pizza.component';
import { ListaPizzaComponent } from './components/lista-pizza/lista-pizza.component';


@NgModule({
  declarations: [
    DetallePizzasComponent,
    AltaPizzaComponent,
    ModificarPizzaComponent,
    BorrarPizzaComponent,
    ListaPizzaComponent
  ],
  imports: [
    CommonModule,
    PizzasRoutingModule,
    ReactiveFormsModule
  ]
})
export class PizzasModule { }
