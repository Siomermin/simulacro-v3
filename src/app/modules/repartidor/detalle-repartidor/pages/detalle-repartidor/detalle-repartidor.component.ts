import { Component } from '@angular/core';
import { Repartidor } from '../../../alta-repartidor/models/repartidor';

@Component({
  selector: 'app-detalle-repartidor',
  templateUrl: './detalle-repartidor.component.html',
  styleUrls: ['./detalle-repartidor.component.scss']
})
export class DetalleRepartidorComponent {
  repartidorSeleccionado: Repartidor | null = null;

  onRepartidorSelected(repartidor: Repartidor) {
    this.repartidorSeleccionado = repartidor;
  }
}
