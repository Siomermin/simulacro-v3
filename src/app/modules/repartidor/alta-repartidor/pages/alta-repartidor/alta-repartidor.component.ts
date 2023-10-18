import { Component } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Repartidor } from '../../models/repartidor';
import { Pais } from '../../models/pais';
import { FirestoreService } from '../../services/firestore.service';

import Swal from 'sweetalert2';


@Component({
  selector: 'app-alta-repartidor',
  templateUrl: './alta-repartidor.component.html',
  styleUrls: ['./alta-repartidor.component.scss'],
})
export class AltaRepartidorComponent {
  paisSeleccionado: Pais = new Pais('', ''); // Initialize with empty values
  repartidor: Repartidor = new Repartidor();
  altaRepartidorForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private firestoreService: FirestoreService
  ) {}

  ngOnInit(): void {
    this.altaRepartidorForm = this.formBuilder.group({
      dni: ['', Validators.required],
      nombre: ['', Validators.required],
      edad: ['', Validators.required],
      capacidadDeTransporte: ['', Validators.required],
      paisDeOrigen: ['', Validators.required],
      unidadPropia: [true, Validators.required],
    });
  }

  handlePaisSeleccionado(pais: Pais) {
    this.paisSeleccionado = pais;

    this.altaRepartidorForm.get('paisDeOrigen')?.patchValue(pais.nombre);

  }

  onSubmit() {
    if (this.altaRepartidorForm.valid) {
      // The form is valid, you can submit it here
      this.repartidor = this.altaRepartidorForm.value;
      this.firestoreService.save(this.repartidor, 'repartidor');
      Swal.fire('Repartidor guardado correctamente!');

      console.log(this.repartidor); // You can send the data to your service or perform other actions.    } else {

    }
    else {
      Swal.fire('No fue posible guardar el repartidor!');
      this.altaRepartidorForm.markAllAsTouched();

    }
  }
}
