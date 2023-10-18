import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetalleRepartidorRoutingModule } from './detalle-repartidor-routing.module';
import { DetalleRepartidorComponent } from './pages/detalle-repartidor/detalle-repartidor.component';
import { ListadoRepartidoresComponent } from './components/listado-repartidores/listado-repartidores.component';
import { RepartidorSeleccionadoComponent } from './components/repartidor-seleccionado/repartidor-seleccionado.component';
import { PaisRepartidorComponent } from './components/pais-repartidor/pais-repartidor.component';
import { HttpClientModule } from '@angular/common/http';
import { PaisService } from '../alta-repartidor/services/pais.service';


@NgModule({
  declarations: [
    DetalleRepartidorComponent,
    ListadoRepartidoresComponent,
    RepartidorSeleccionadoComponent,
    PaisRepartidorComponent
  ],
  imports: [
    CommonModule,
    DetalleRepartidorRoutingModule,
    HttpClientModule
  ],
  providers: [
    PaisService
  ]
})
export class DetalleRepartidorModule { }
