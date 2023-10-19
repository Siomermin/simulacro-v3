import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import Swal from 'sweetalert2';
import { Pizza } from '../../models/pizza';
import { FirestoreService } from '../../../repartidor/alta-repartidor/services/firestore.service';

@Component({
  selector: 'app-alta-pizza',
  templateUrl: './alta-pizza.component.html',
  styleUrls: ['./alta-pizza.component.scss'],
})
export class AltaPizzaComponent {
  altaPizzaForm!: FormGroup;
  @Output() pizza = new EventEmitter<Pizza>();

  get nombre() {
    return this.altaPizzaForm.get('nombre');
  }
  get ingredientes() {
    return this.altaPizzaForm.get('ingredientes');
  }
  get precio() {
    return this.altaPizzaForm.get('precio');
  }
  get peso() {
    return this.altaPizzaForm.get('peso');
  }

  constructor(
    private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.altaPizzaForm = this.formBuilder.group({
      nombre: ['', Validators.required],
      ingredientes: ['', Validators.required],
      precio: ['', Validators.required],
      peso: [
        '',
        [Validators.required, Validators.min(500), Validators.max(1000)],
      ],
    });
  }

  // Inside AltaPizzaComponent
  onSubmit() {
    if (this.altaPizzaForm.valid) {

      const pizzaCreada = new Pizza(
        this.nombre?.value,
        this.ingredientes?.value,
        this.precio?.value,
        this.peso?.value
      );

      console.log(pizzaCreada);

      this.pizza.emit(pizzaCreada); // Emit a Pizza object
    }
  }
}
