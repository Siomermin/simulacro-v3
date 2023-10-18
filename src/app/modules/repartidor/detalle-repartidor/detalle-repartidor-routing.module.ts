import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalleRepartidorComponent } from './pages/detalle-repartidor/detalle-repartidor.component';

const routes: Routes = [
  { path: '', component: DetalleRepartidorComponent }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetalleRepartidorRoutingModule { }
