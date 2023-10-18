import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AltaRepartidorRoutingModule } from './alta-repartidor-routing.module';

import { PaisRepartidorComponent } from './components/pais-repartidor/pais-repartidor.component';
import { AltaRepartidorComponent } from './pages/alta-repartidor/alta-repartidor.component';
import { PaisService } from './services/pais.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    PaisRepartidorComponent,
    AltaRepartidorComponent
  ],
  imports: [
    CommonModule,
    AltaRepartidorRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    PaisService
  ]
})
export class AltaRepartidorModule { }
