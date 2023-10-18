import { Component, Input } from '@angular/core';
import { Repartidor } from '../../../alta-repartidor/models/repartidor';

@Component({
  selector: 'app-repartidor-seleccionado',
  templateUrl: './repartidor-seleccionado.component.html',
  styleUrls: ['./repartidor-seleccionado.component.scss']
})
export class RepartidorSeleccionadoComponent {
  @Input() repartidorSeleccionado: Repartidor | null = null;


}
