import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DetallePizzasComponent } from './pages/detalle-pizzas/detalle-pizzas.component';

const routes: Routes = [
  { path: '', component: DetallePizzasComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PizzasRoutingModule { }
