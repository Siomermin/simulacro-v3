import { Component, Input, OnInit } from '@angular/core';
import { Pais } from '../../../alta-repartidor/models/pais';
import { PaisService } from '../../../alta-repartidor/services/pais.service';

@Component({
  selector: 'app-pais-repartidor',
  templateUrl: './pais-repartidor.component.html',
  styleUrls: ['./pais-repartidor.component.scss']
})
export class PaisRepartidorComponent implements OnInit {
  @Input() paisRepartidorSeleccionado?: string;
  paisSeleccionado: Pais | null = null;

  constructor(private paisService: PaisService) {}

  ngOnInit(): void {
    this.getDataPais();
  }

  ngOnChanges(): void {
    this.getDataPais();
  }

  private getDataPais() {
    if (this.paisRepartidorSeleccionado) {
      this.paisService.getPaisPorNombre(this.paisRepartidorSeleccionado)
        .subscribe((data: Pais | null) => {
          if (data) {
            this.paisSeleccionado = data;
          }
        });
    }
  }
}
