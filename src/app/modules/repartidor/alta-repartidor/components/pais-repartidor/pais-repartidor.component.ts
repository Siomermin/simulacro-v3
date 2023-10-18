import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { Pais } from '../../models/pais';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-pais-repartidor',
  templateUrl: './pais-repartidor.component.html',
  styleUrls: ['./pais-repartidor.component.scss'],
})
export class PaisRepartidorComponent implements OnInit {
  protected listadoPaises: Pais[] = [];
  @Output() public paisSeleccionado: EventEmitter<any>;

  constructor(private readonly paisesService: PaisService) {
    this.paisSeleccionado = new EventEmitter();
  }

  ngOnInit() {
    // Call the service to get the list of countries and populate listadoPaises
    this.paisesService.getPaises().subscribe(
      (paises: Pais[]) => {
        this.listadoPaises = paises;
      },
      (error) => {
        console.error('Error fetching countries:', error);
      }
    );
  }

  public seleccionarPais(pais: Pais) {
    this.paisSeleccionado.emit(pais);
  }
}
