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

  get dni() {
    return this.altaRepartidorForm.get('dni');
  }

  get nombre() {
    return this.altaRepartidorForm.get('nombre');
  }

  get apellido() {
    return this.altaRepartidorForm.get('apellido');
  }

  get pais() {
    return this.altaRepartidorForm.get('pais');
  }

  get unidadPropia() {
    return this.altaRepartidorForm.get('unidadPropia');
  }

  get edad() {
    return this.altaRepartidorForm.get('edad');
  }

  get capacidad() {
    return this.altaRepartidorForm.get('capacidad');
  }

  constructor(
    private formBuilder: FormBuilder,
    private firestoreService: FirestoreService
  ) {}

  ngOnInit(): void {
    this.altaRepartidorForm = this.formBuilder.group({
      dni: ['', [Validators.required, Validators.minLength(7), Validators.maxLength(8)]],
      nombre: ['', [Validators.required]],
      edad: ['', [Validators.required, Validators.min(18), Validators.max(80)]],
      capacidad: ['', [Validators.required, Validators.min(1)]],
      pais: ['', [Validators.required]],
      unidadPropia: ['', [Validators.required]],
    });
  }

  handlePaisSeleccionado(pais: Pais) {
    this.paisSeleccionado = pais;

    this.pais?.patchValue(pais.nombre);
  }

  onSubmit() {
    if (this.altaRepartidorForm.valid) {
      // The form is valid, you can submit it here
      this.repartidor = this.altaRepartidorForm.value;
      console.log(this.repartidor);
      this.firestoreService.save(this.repartidor, 'repartidor');
      Swal.fire('Repartidor guardado correctamente!');

    }
    else {
      Swal.fire('No fue posible guardar el repartidor!');
      this.altaRepartidorForm.markAllAsTouched();

    }
  }
}
