import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Repartidor } from '../../../alta-repartidor/models/repartidor';
import { FirestoreService } from '../../../alta-repartidor/services/firestore.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-listado-repartidores',
  templateUrl: './listado-repartidores.component.html',
  styleUrls: ['./listado-repartidores.component.scss'],
})
export class ListadoRepartidoresComponent implements OnInit {
  repartidores: Repartidor[] = [];

  @Output() repartidorSeleccionado = new EventEmitter<Repartidor>();


  constructor(private firestoreService: FirestoreService) {}

  async ngOnInit() {
    try {
      this.repartidores = await this.firestoreService.get('repartidor');
    } catch (error) {
      console.error('Error fetching repartidores:', error);
    }
  }

  seleccionarRepartidor(repartidor: Repartidor) {
    this.repartidorSeleccionado.emit(repartidor);
  }
}
